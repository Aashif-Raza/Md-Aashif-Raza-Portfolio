const fs = require('fs');
const path = require('path');

async function walk(dir) {
  let files = [];
  const items = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) files = files.concat(await walk(full));
    else files.push(full);
  }
  return files;
}

async function main() {
  const repoRoot = process.cwd();
  const assetsDir = path.join(repoRoot, 'public', 'assets');
  const srcDir = path.join(repoRoot, 'src');

  const assetFiles = (await walk(assetsDir)).map(f => path.relative(repoRoot, f).replace(/\\/g, '/'));
  const srcFiles = (await walk(srcDir)).filter(f => f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.json') || f.endsWith('.css') || f.endsWith('.scss') || f.endsWith('.md'));

  const srcContents = {};
  for (const f of srcFiles) {
    try {
      srcContents[f] = await fs.promises.readFile(f, 'utf8');
    } catch (e) {
      srcContents[f] = '';
    }
  }

  const unreferenced = [];
  for (const asset of assetFiles) {
    const rel = asset.replace(/^public\//, '');
    const withSlash = '/' + rel;
    let found = false;
    for (const [f, content] of Object.entries(srcContents)) {
      if (content.includes(withSlash) || content.includes(rel) || content.includes(path.basename(rel))) {
        found = true;
        break;
      }
    }
    if (!found) unreferenced.push(rel);
  }

  console.log('Analyzed', assetFiles.length, 'assets');
  if (unreferenced.length === 0) {
    console.log('No unreferenced assets found.');
  } else {
    console.log('Unreferenced assets:');
    unreferenced.forEach(a => console.log(a));
  }
}

main().catch(err => { console.error(err); process.exit(1); });
