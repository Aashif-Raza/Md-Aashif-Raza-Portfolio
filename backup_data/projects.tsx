import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// Icon components as inline SVGs for better performance
const RiNextjsFill = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.572 0c-.163.007-.311.014-.442.025-.03.003-.05.007-.05.007l-.138.016c-.188.034-.372.077-.55.128-.06.02-.12.04-.177.063-.14.05-.275.112-.405.18-.1.05-.197.107-.29.167-.09.06-.177.123-.26.19-.085.06-.167.13-.245.2-.078.07-.152.14-.22.21-.068.07-.14.14-.2.22-.06.08-.13.16-.19.25-.06.09-.12.18-.17.28-.05.1-.1.2-.15.3-.05.11-.09.22-.13.34-.04.12-.07.24-.1.36-.03.13-.05.26-.07.39-.02.13-.03.27-.04.4-.01.14-.01.28-.01.42v.01c0 .14 0 .28.01.42.01.13.02.27.04.4.02.13.05.26.07.39.03.12.07.24.1.36.04.12.08.23.13.34.05.11.1.22.15.33.05.1.1.21.15.31.06.09.12.19.18.28.06.09.13.18.19.27.07.09.14.18.21.27.07.09.15.18.23.26.08.09.16.18.24.26l.21.21c.08.08.16.16.25.23.09.08.18.15.28.22.09.07.19.14.29.2.1.07.2.13.31.18.1.06.21.11.32.15.11.05.23.09.34.13.12.04.23.08.35.1.12.03.25.06.38.07.13.02.26.03.39.04.14.01.28.01.42.01.14 0 .28-.01.42-.01-.01-.01-.01-.01-.01zm.856 0c.14 0 .28.01.42.01.14 0 .28-.01.42-.01.13-.01.26-.02.39-.04.13-.01.26-.04.38-.07.12-.02.24-.06.35-.1.11-.04.22-.09.32-.15.1-.05.21-.1.31-.18.1-.06.2-.13.29-.2.09-.07.19-.14.28-.22.09-.07.17-.15.25-.23l.21-.21c.08-.08.16-.16.24-.26.07-.09.14-.18.21-.27.06-.09.12-.19.18-.28.06-.09.11-.2.16-.31.05-.11.09-.22.13-.33.04-.12.08-.23.1-.36.03-.12.07-.24.1-.36.02-.13.05-.26.07-.39.01-.13.03-.27.04-.4.01-.14.01-.28.01-.42v-.01c0-.14 0-.28-.01-.42-.01-.13-.02-.27-.04-.4-.02-.13-.05-.26-.07-.39-.03-.12-.07-.24-.1-.36-.04-.12-.08-.23-.13-.34-.05-.11-.1-.22-.15-.33-.06-.09-.12-.19-.19-.28-.06-.09-.13-.18-.2-.27-.07-.09-.15-.18-.23-.26-.08-.08-.16-.16-.25-.23-.09-.08-.18-.15-.28-.22-.1-.07-.2-.13-.31-.18-.1-.05-.21-.1-.32-.15-.11-.04-.23-.08-.35-.1-.12-.03-.25-.06-.38-.07-.13-.02-.26-.03-.39-.04-.14-.01-.28-.01-.42-.01-.14 0-.28.01-.42.01-.01 0-.01 0-.01 0zm-.428 1.875c-.11.01-.22.02-.33.04-.11.02-.22.04-.33.07-.11.03-.21.06-.31.1-.1.04-.2.09-.3.14-.09.05-.19.11-.28.17-.09.06-.18.13-.26.2-.09.07-.17.15-.25.23-.08.08-.16.16-.23.25-.07.09-.15.17-.21.26-.07.09-.13.19-.19.29-.06.1-.11.2-.16.31-.05.11-.09.23-.13.34-.04.12-.07.23-.09.35-.03.12-.05.25-.06.37-.02.13-.03.25-.03.38-.01.13-.01.25-.01.38v.01c0 .13 0 .25.01.38.01.13.02.25.03.38.02.12.04.25.06.37.03.12.05.24.09.35.04.12.08.23.13.34.05.11.09.22.14.33.05.11.1.22.16.31.06.1.12.2.19.29.06.1.13.19.21.26.08.08.16.15.25.23.09.07.17.15.26.2.09.06.18.12.28.17.1.05.2.1.3.14.1.04.2.07.31.1.11.03.22.05.33.07.11.02.22.03.33.04.11.01.22.01.33.01.11 0 .22-.01.33-.01.11-.01.22-.02.33-.04.11-.02.22-.04.33-.07.11-.03.21-.06.31-.1.1-.04.2-.09.3-.14.09-.05.19-.11.28-.17.09-.06.18-.13.26-.2.09-.07.17-.15.25-.23.08-.08.16-.16.23-.25.07-.09.15-.17.21-.26.07-.09.13-.19.19-.29.06-.1.11-.2.16-.31.05-.11.09-.23.13-.34.04-.12.08-.23.09-.35.03-.12.05-.24.06-.37.02-.13.03-.25.03-.38.01-.13.01-.25.01-.38v-.01c0-.13 0-.25-.01-.38-.01-.13-.02-.25-.03-.38-.02-.12-.04-.25-.06-.37-.03-.12-.05-.24-.09-.35-.04-.12-.08-.23-.13-.34-.05-.11-.09-.22-.14-.33-.05-.11-.1-.22-.16-.31-.06-.1-.12-.2-.19-.29-.06-.1-.13-.19-.21-.26-.08-.08-.16-.15-.25-.23-.09-.07-.17-.15-.26-.2-.09-.06-.18-.12-.28-.17-.1-.05-.2-.1-.3-.14-.1-.04-.2-.07-.31-.1-.11-.03-.22-.05-.33-.07-.11-.02-.22-.03-.33-.04-.11-.01-.22-.01-.33-.01-.11 0-.22.01-.33.01-.01 0-.01 0-.01 0z"/>
  </svg>
);

const RiNodejsFill = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.084-0.381 c0.562-0.196,0.676-0.242,1.274-0.584 c0.063-0.036,0.145-0.023,0.21,0.015l2.256,1.309 c0.078,0.042,0.189,0.042,0.261,0l8.795-5.076 c0.078-0.045,0.127-0.148,0.127-0.247V7.231 c0-0.101-0.049-0.201-0.129-0.249 l-8.791-5.072c-0.076-0.045-0.177-0.045-0.254,0l-8.79,5.072C1.248,7.032,1.2,7.13,1.2,7.23v10.142 c0,0.099,0.048,0.198,0.128,0.241l2.909,1.68 c0.79,0.395,1.274-0.07,1.274-0.537V8.287c0-0.148,0.12-0.262,0.268-0.262h1.114 c0.142,0,0.262,0.114,0.262,0.262v10.453c0,1.054-0.574,1.659-1.571,1.659 c-0.307,0-0.55-0.03-1.227-0.333l-2.788-1.603C0.472,18.262,0,17.376,0,16.475V7.231c0-0.896,0.472-1.784,1.224-2.231l8.795-5.082c0.731-0.415,1.703-0.415,2.426,0l8.795,5.082C21.527,5.447,22,6.334,22,7.231v10.142 c0,0.896-0.472,1.784-1.224,2.231l-8.795,5.082C12.639,23.916,12.319,24,11.998,24z M15.371,14.71c-3.848,0-4.659-1.765-4.659-3.244 c0-0.14,0.114-0.259,0.259-0.259h1.137 c0.124,0,0.227,0.09,0.247,0.211 c0.169,1.125,0.669,1.7,3.021,1.7 c1.847,0,2.634-0.417,2.634-1.395 c0-0.606-0.24-1.021-3.113-1.313 c-2.414-0.247-3.907-0.506-3.907-2.714 c0-2.053,1.732-3.082,4.637-3.082 c3.255,0,4.868,1.131,5.042,3.643c0.006,0.075-0.021,0.148-0.074,0.205 c-0.051,0.054-0.123,0.084-0.198,0.084h-1.143 c-0.114,0-0.213-0.084-0.237-0.198 c-0.264-1.182-0.942-1.558-2.887-1.558 c-2.077,0-2.302,0.724-2.302,1.271 c0,0.687,0.3,0.885,3.021,1.278 c2.693,0.389,3.996,0.939,3.996,2.856 C20.828,13.549,19.018,14.71,15.371,14.71L15.371,14.71z"/>
  </svg>
);

const RiReactjsFill = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.236-2.236 2.236 2.236 0 0 1 2.235 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.68.72-1.365 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.45-.572.905-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.205.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.212.098-.74 0-1.477-.035-2.205-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.212-.098zm-5.482.695c.285.66.646 1.37 1.067 2.1-.416-.72-.777-1.43-1.062-2.09.44-.1.887-.19 1.348-.26-.098.088-.195.176-.28.265zm10.965 0c-.09-.09-.18-.18-.275-.26.452.064.898.147 1.335.248-.28.66-.632 1.36-1.048 2.08.416-.73.777-1.44 1.038-2.06zm1.73.955c.49.117.96.254 1.4.4-.445.147-.92.284-1.416.402-.152-.563-.328-1.14-.538-1.724.208.588.395 1.168.543 1.727zm-14.425.006c.144-.56.33-1.137.533-1.72-.208.588-.395 1.167-.538 1.722-.49-.117-.96-.254-1.4-.4.445-.147.92-.284 1.416-.402zm13.523.534c.112.49.195.964.254 1.42.23 1.868-.054 3.32-.714 3.708-.148.084-.33.127-.558.127-1.012 0-2.514-.807-4.11-2.28.68-.72 1.365-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54.112.49.2.965.244 1.42v.01zm1.823 1.68c-.96.236-2.006.417-3.107.534.66.905 1.345 1.727 2.035 2.446-1.592 1.48-3.087 2.292-4.105 2.292-.224 0-.406-.043-.558-.126-.666-.38-.955-1.834-.73-3.703.054-.46.142-.945.25-1.44.96.236 2.006.417 3.107.534.66.905 1.345 1.727 2.035 2.446-1.525 1.424-2.972 2.23-3.977 2.23v.005zm-14.475-.01c1.012 0 2.514-.808 4.11-2.28.68.72 1.365 1.537 2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.128.563-.133zm5.482 3.05c-.455-.468-.91-.992-1.36-1.564.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.45.572-.905 1.096-1.345 1.565zm-5.482-5.48c-.285-.66-.646-1.37-1.067-2.1.416.72.777 1.43 1.062 2.09-.44.1-.887.19-1.348.26.098-.088.195-.176.28-.265zm10.965 0c.09.09.18.18.275.26-.452-.064-.898-.147-1.335-.248.28.66.632 1.36 1.048 2.08-.416-.73-.777-1.44-1.038-2.06z"/>
  </svg>
);

// Additional icon components as inline SVGs
const SiChakraui = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.951 7.951h2.828l2.121 2.121 2.121-2.121h2.828l-3.535 3.535 3.535 3.536h-2.828l-2.121-2.121-2.121 2.121H6.951l3.535-3.536L6.951 7.951z"/>
  </svg>
);

const SiCss3 = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.192 3.813L2.474 20.188l9.526 2.609 9.526-2.609-1.718-16.375H4.192zm7.808 14.566l-5.727-1.551-.393-3.708h5.426v-2.656H5.78l.197-1.856h6.023V7.652H5.037l.197-1.856h11.532l-.393 3.708h-6.771v2.656h5.426l-.393 3.708-5.727 1.551v2.656l9.526-2.609-.393-3.708h-2.828l.197-1.856h2.828l.197-1.856H4.192z"/>
  </svg>
);

const TbBrandFramerMotion = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 0L21 4.5v7L16.5 16L12 11.5V4.5L16.5 0zm0 16L21 20.5v-7L16.5 16L12 11.5v7L16.5 16zM7.5 8L12 12.5v-7L7.5 0L3 4.5v7L7.5 8zm0 8L12 20.5v-7L7.5 16L3 11.5v7L7.5 16z"/>
  </svg>
);

// Additional tech icons
const SiPython = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.25.18l.9.02.7.06.56.09.44.1.35.12.28.13.22.14.18.15.14.16.1.16.08.17.06.17.04.16.02.15.01.13v4.1l-.01.13-.03.16-.05.17-.07.16-.09.16-.11.15-.14.14-.16.13-.18.12-.21.1-.24.09-.27.07-.3.05-.33.03-.36.02-.39.01h-4.9l-.39-.01-.36-.02-.33-.03-.3-.05-.27-.07-.24-.09-.21-.1-.18-.12-.16-.13-.14-.14-.11-.15-.09-.16-.07-.16-.05-.17-.03-.16-.01-.13V2.25l.01-.13.03-.16.05-.17.07-.16.09-.16.11-.15.14-.14.16-.13.18-.12.21-.1.24-.09.27-.07.3-.05.33-.03.36-.02.39-.01h2.9zm-7.88 14.25l-.9-.02-.7-.06-.56-.09-.44-.1-.35-.12-.28-.13-.22-.14-.18-.15-.14-.16-.1-.16-.08-.17-.06-.17-.04-.16-.02-.15-.01-.13v-4.1l.01-.13.03-.16.05-.17.07-.16.09-.16.11-.15.14-.14.16-.13.18-.12.21-.1.24-.09.27-.07.3-.05.33-.03.36-.02.39-.01h4.9l.39.01.36.02.33.03.3.05.27.07.24.09.21.1.18.12.16.13.14.14.11.15.09.16.07.16.05.17.03.16.01.13v4.1l-.01.13-.03.16-.05.17-.07.16-.09.16-.11.15-.14.14-.16.13-.18.12-.21.1-.24.09-.27.07-.3.05-.33.03-.36.02-.39.01h-2.9z"/>
  </svg>
);

const SiPrisma = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.534 20.849l-4.534-2.619-4.534 2.619 4.534-13.848 4.534 13.848zM2.465 20.849l9.535-16.698 9.535 16.698h-19.07z"/>
  </svg>
);

const SiMysql = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.316 6.588c-.847 0-1.55.28-2.11.84-.56.56-.84 1.263-.84 2.11 0 .847.28 1.55.84 2.11.56.56 1.263.84 2.11.84.847 0 1.55-.28 2.11-.84.56-.56.84-1.263.84-2.11 0-.847-.28-1.55-.84-2.11-.56-.56-1.263-.84-2.11-.84zm0 7.058c-1.263 0-2.326.42-3.19 1.263-.864.843-1.296 1.885-1.296 3.126 0 1.241.432 2.283 1.296 3.126.864.843 1.927 1.263 3.19 1.263 1.263 0 2.326-.42 3.19-1.263.864-.843 1.296-1.885 1.296-3.126 0-1.241-.432-2.283-1.296-3.126-.864-.843-1.927-1.263-3.19-1.263zm5.263 0c-.847 0-1.55.28-2.11.84-.56.56-.84 1.263-.84 2.11 0 .847.28 1.55.84 2.11.56.56 1.263.84 2.11.84.847 0 1.55-.28 2.11-.84.56-.56.84-1.263.84-2.11 0-.847-.28-1.55-.84-2.11-.56-.56-1.263-.84-2.11-.84zm5.263 0c-.847 0-1.55.28-2.11.84-.56.56-.84 1.263-.84 2.11 0 .847.28 1.55.84 2.11.56.56 1.263.84 2.11.84.847 0 1.55-.28 2.11-.84.56-.56.84-1.263.84-2.11 0-.847-.28-1.55-.84-2.11-.56-.56-1.263-.84-2.11-.84z"/>
  </svg>
);

const SiMongodb = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.193 9.555c-1.681-6.357-7.532-9.205-9.224-9.493-.72-.094-.453.336-.36.473.348.628 1.023 1.622 1.023 1.622.056.12.36.432.36.432C12.688 6.483 14.58 8.965 14.58 8.965c.539.719.816 1.182.816 1.182s.324.12.48-.36c.156-.48.617-2.052.617-2.052.12-.528.696-.18.696-.18.576.348 1.632 1.896 1.632 1.896.12.18.348.12.348.12.348-.12.648-1.68.648-1.68.348-1.68-.228-2.856-.228-2.856zM6.78 17.473c.696.12 1.68-.36 1.68-.36.696-.36 1.392-.912 1.392-.912.348-.24.696-.12.696-.12.348.12.48.48.48.48.12.36.12.696.12.696-.12.696-.36 1.392-.36 1.392-.24.696-.696 1.392-.696 1.392-.36.696-1.056 1.392-1.056 1.392-.696.696-1.392 1.056-1.392 1.056-.696.36-1.392.36-1.392.36-.696 0-1.392-.36-1.392-.36-.696-.36-1.056-1.056-1.056-1.056-.696-.696-1.056-1.392-1.056-1.392-.36-.696-.696-1.392-.696-1.392-.24-.696-.36-1.392-.36-1.392-.12-.36 0-.696 0-.696.12-.36.48-.48.48-.48.348-.12.696.12.696.12.696.36 1.392.912 1.392.912.696.36 1.68.36 1.68.36z"/>
  </svg>
);

const SiMongoose = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const SiExpress = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const SiReactquery = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.236-2.236 2.236 2.236 0 0 1 2.235 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/>
  </svg>
);

const SiShadcnui = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
  </svg>
);

const SiTailwindcss = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.662 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.339 6.182 14.974 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.172 1.191 2.537 2.573 5.511 2.573 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.339 13.382 8.974 12 6.001 12z"/>
  </svg>
);

const SiDocker = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.938 8.953c.708 0 1.282.574 1.282 1.282s-.574 1.282-1.282 1.282-1.282-.574-1.282-1.282.574-1.282 1.282-1.282zm-6.563 0c.708 0 1.282.574 1.282 1.282s-.574 1.282-1.282 1.282S6.094 10.943 6.094 10.235s.574-1.282 1.282-1.282zm3.281 0c.708 0 1.282.574 1.282 1.282s-.574 1.282-1.282 1.282-1.282-.574-1.282-1.282.574-1.282 1.282-1.282zm3.282 3.281c.708 0 1.282.574 1.282 1.282s-.574 1.282-1.282 1.282-1.282-.574-1.282-1.282.574-1.282 1.282-1.282zm-6.563 0c.708 0 1.282.574 1.282 1.282s-.574 1.282-1.282 1.282-1.282-.574-1.282-1.282.574-1.282 1.282-1.282zm3.281 0c.708 0 1.282.574 1.282 1.282s-.574 1.282-1.282 1.282-1.282-.574-1.282-1.282.574-1.282 1.282-1.282z"/>
  </svg>
);

const SiFirebase = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.164 8.886l-3.833 6.416-3.833-6.416h7.666zm-14.328 0l5.495 9.228-5.495-9.228zm7.666 0l5.495 9.228-5.495-9.228zm-1.916 0l-5.495 9.228 5.495-9.228zm3.833 0l5.495 9.228-5.495-9.228z"/>
  </svg>
);

const SiSocketdotio = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const SiJavascript = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-1.37-.528-2.342-.896-2.342-1.898 0-.896.696-1.314 1.784-1.314 1.48 0 2.06.528 2.342 1.898l2.342-.35c-.35-2.016-1.757-2.873-3.682-2.873-2.06 0-3.682 1.095-3.682 2.873 0 1.898 1.224 2.69 3.148 3.322 1.48.528 2.342.896 2.342 1.898 0 .896-.696 1.48-1.784 1.48-1.48 0-2.342-.704-2.69-2.168l-2.342.35c.528 2.168 1.934 3.148 4.032 3.148 2.342 0 3.682-1.224 3.682-2.873 0-1.898-1.224-2.69-3.148-3.322-1.48-.528-2.342-.896-2.342-1.898 0-.896.696-1.314 1.784-1.314 1.134 0 1.756.528 2.06 1.898l2.342-.35z"/>
  </svg>
);

const SiHtml5 = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.56l4.07-1.13.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.01l-.21 2.3-2.15.58-2.14-.58-.14-1.66h-2.06l.29 3.19L12 17.56zM4.07 3h15.86L18.5 19.2 12 21l-6.5-1.8L4.07 3zm2.86 2.02l.46 5.03h8.98l.46 5.03-4.93 1.36-4.93-1.36.46-5.03H6.93z"/>
  </svg>
);

const SiEjs = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
  </svg>
);

const SiTypescript = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34 2.84 2.84 0 0 1 .87.57 2.1 2.1 0 0 1 .556.828c.14.32.21.692.21 1.114 0 .492-.1.924-.3 1.3-.2.376-.48.69-.84.96-.36.27-.79.47-1.29.6-.51.13-1.08.19-1.71.19-.6 0-1.14-.07-1.62-.21a3.7 3.7 0 0 1-1.26-.6 2.8 2.8 0 0 1-.78-.96c-.18-.376-.27-.822-.27-1.328 0-.424.07-.796.21-1.116.14-.32.34-.59.6-.81.26-.22.57-.39.93-.51.36-.12.76-.18 1.2-.18.12 0 .23 0 .34.01.11.01.21.02.3.04v2.49a2.1 2.1 0 0 0-.25-.04c-.09-.01-.18-.02-.28-.02-.28 0-.53.04-.75.12-.22.08-.41.2-.57.36-.16.16-.28.36-.37.6-.09.24-.13.51-.13.81 0 .3.04.57.13.81.09.24.21.44.37.6.16.16.35.28.57.36.22.08.47.12.75.12.18 0 .34-.02.48-.06.14-.04.26-.09.36-.15v-3.19h2.25v4.02c-.18.13-.39.25-.63.36-.24.11-.51.2-.81.27-.3.07-.62.13-.96.17-.34.04-.69.06-1.06.06zm-15.75 0h2.25v6.75h4.5v2.25h-6.75V9.75z"/>
  </svg>
);

const SiVuedotjs = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
  </svg>
);

const SiSanity = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
  </svg>
);

const SiThreedotjs = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
  </svg>
);

const SiSupabase = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.3 9.88l-8.4 8.4c-.4.4-.9.6-1.4.6-.5 0-1-.2-1.4-.6l-8.4-8.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l7.1 7.1 7.1-7.1c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8z"/>
  </svg>
);

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
