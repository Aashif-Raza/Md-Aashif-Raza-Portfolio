import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiCss3,
  SiDocker,
  SiEjs,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongoose,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  sql: {
    title: "SQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  mongoose: {
    title: "Mongoose",
    bg: "black",
    fg: "white",
    icon: <SiMongoose />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  ejs: {
    title: "EJS",
    bg: "black",
    fg: "white",
    icon: <SiEjs />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "wanderlust",
    category: "Travel & Accommodation",
    title: "WanderLust",
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.ejs,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.mongoose,
      ],
    },
    live: "https://wanderlust-hub-ys3m.onrender.com",
    github: "https://github.com/Aashif-Raza/WanderLust-Hub",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            WanderLust is a travel and accommodation booking platform with a
            clean, modern UI. Search destinations, filter by categories like
            Trending, Room, Iconic Cities, Mountains, Castles, Amazing Pools,
            Camping, Farms, Beach, and more — then browse listings with image,
            title, and price per night. List your place, sign up, or log in to
            get started.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1566073771259-6a0e3b6b2f7a?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Browse & Book</TypographyH3>
          <p className="font-mono mb-2">
            Filter by Room, Iconic Cities, Mountains, Castles, Amazing Pools,
            Camping, Farms, Artic, Domes, Boats, and Beach. Toggle to display
            total after taxes. Each listing shows a photo, title, and price per
            night in a responsive grid.
          </p>
        </div>
      );
    },
  },
  {
    id: "video-conferencing",
    category: "Communication",
    title: "ConnectUs",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png"],
    live: "https://github.com/Aashif-Raza/ConnectUs",
    github: "https://github.com/Aashif-Raza/ConnectUs",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            ConnectUs is a full-stack video conferencing application enabling seamless
            real-time communication. Built with MERN stack, it provides peer-to-peer
            video calling, live chat, screen sharing, and meeting history tracking.
            Create meetings instantly or join with unique meeting codes without requiring
            an account.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Real-time Communication</TypographyH3>
          <p className="font-mono mb-2">
            Powered by WebRTC for high-quality peer-to-peer video/audio and Socket.IO
            for instant messaging. Features include screen sharing, guest access, responsive
            Material-UI design, and automatic meeting history. Secure user authentication
            with bcrypt password hashing.
          </p>
        </div>
      );
    },
  },
  {
    id: "trendnest",
    category: "E-Commerce",
    title: "TrendNest",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://trendnes.netlify.app",
    github: "https://github.com/Aashif-Raza/TrendNest",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            TrendNest is a responsive e-commerce frontend built with React (Vite),
            Tailwind CSS 4.1, Redux Toolkit, and Firebase Auth. It features a
            curated product catalog, advanced filters, authentication, cart and
            wishlist management, smooth checkout flow, animated UI components,
            and PWA support — designed for a seamless and scalable shopping
            experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Curated catalog, advanced filtering, cart and wishlist, checkout with
            coupon support, email/Google/Facebook login via Firebase, responsive
            design, and modern UI with animations and glassmorphism. Deployed at
            trendnes.netlify.app.
          </p>
        </div>
      );
    },
  },
  {
    id: "flavourfi",
    category: "Web App",
    title: "FlavourFi",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    live: "https://flavourfi.netlify.app",
    github: "https://github.com/Aashif-Raza/FlavourFi",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            FlavourFi is a modern React-based app that lets you search, discover,
            and manage personalized recipes with a smooth, user-friendly interface.
            Find recipes by ingredients, cuisine, or dietary needs with smart
            search and filters; save favorites and revisit recently viewed recipes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Smart search, filters by cooking time and difficulty, recipe categories
            by meal type, save favorites, detailed recipe view with ingredients
            and nutrition, and dark mode. Built with React, Vite, and Spoonacular
            API. Deployed at flavourfi.netlify.app.
          </p>
        </div>
      );
    },
  },
  {
    id: "netflix-clone",
    category: "Web App",
    title: "Netflix Clone",
    src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "#",
    github: "https://github.com/Aashif-Raza/Netflix-Clone",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A modern, responsive Netflix clone built with React, JavaScript, HTML
            and CSS. Features real-time movie data via TMDB API, dynamic hero banner,
            advanced search with debounce, multiple categories (Trending, Top Rated,
            Action, Comedy, TV Shows, etc.), smooth Framer Motion animations, skeleton
            loading, and LocalStorage auth with My List.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Tech & Features</TypographyH3>
          <p className="font-mono mb-2">
            React 19, Vite, Tailwind CSS 4, Framer Motion, Lucide icons. TMDB API
            for movie data; LocalStorage for auth and My List; React Context and
            hooks for state. Responsive carousels, hover effects, glassmorphism,
            and deployable to Vercel or Netlify.
          </p>
        </div>
      );
    },
  },
];
export default projects;
