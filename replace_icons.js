const fs = require('fs');

const path = 'src/data/projects.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /\/\/ Icon components as inline SVGs(.*?)(?=const BASE_PATH)/s;

const replacement = `import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { SiChakraui, SiCss3, SiPython, SiPrisma, SiMysql, SiMongodb, SiMongoose, SiExpress, SiReactquery, SiShadcnui, SiTailwindcss, SiDocker, SiFirebase, SiSocketdotio, SiJavascript, SiHtml5, SiEjs, SiTypescript, SiVuedotjs, SiSanity, SiThreedotjs, SiSupabase } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

`;

content = content.replace(regex, replacement);
fs.writeFileSync(path, content, 'utf8');
console.log('Icons replaced successfully.');
