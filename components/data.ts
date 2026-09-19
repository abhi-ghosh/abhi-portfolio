import { StaticImageData } from "next/image";
import user from "@/assets/icons/user.png";
import folder from "@/assets/icons/folder.webp";
import mail from "@/assets/icons/mail.webp";
import uni from "@/assets/icons/uni.webp";

type Data = {
  icon: string | StaticImageData,
  name: string,
  title: string
}

type Tech = Omit<Data, "title">

type Status = Omit<Data, "icon">

type WhichButtonState = ButtonType["name"];

type ButtonType = {
    title:"About"|"Education"|"Projects"|"Contact",
    name:"about"|"education"|"projects"|"contact",
    icon:StaticImageData
  }

const personalData: Status = {
  name: "Abhijit Ghosh",
  title: "Front-End Engineer"
}

const status: {name: string, title: string, alt: string}[]  = [
  {
    name: "ready",
    title: "Ready to work",
    alt: "computer"
  },
  {
    name: "relocate",
    title: "Eager to relocate",
    alt: "globe"
  }
]

const infoCards: Status[] = [
  {
    name: "time",
    title: "Time",
  },
  {
    name: "skills",
    title: "Primary Skills",
  },
  {
    name: "learning",
    title: "Now Learning",
  },
  {
    name: "date",
    title: "Date",
  },
  {
    name: "weather",
    title: "Current Weather",
  },
  {
    name: "status",
    title: "Status",
  },
];

const skills: Tech[] = [
  {
    name: "React",
    icon: "react",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "Next.js",
    icon: "nextjs",
  },
  {
    name: "HTML5",
    icon: "html5",
  },
  {
    name: "CSS3",
    icon: "css3",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
  },
  {
    name: "Chakra UI",
    icon: "chakraui",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
  },
  {
    name: "Framer Motion",
    icon: "framermotion",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "GitHub",
    icon: "github",
  },
  {
    name: "Figma",
    icon: "figma",
  },
  {
    name: "Vercel",
    icon: "vercel",
  },
  {
    name: "Vite",
    icon: "vite",
  },
  {
    name: "Vitest",
    icon: "vitest",
  },
  {
    name: "Jest",
    icon: "jest",
  }
];

const learning: Tech[] = [
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "Django",
    icon: "django",
  },
  {
    name: "SQL",
    icon: "azuresqldatabase",
  },
  {
    name: "MySQL",
    icon: "mysql",
  }
];


const buttons: ButtonType[] = [
  {
    title: "About",
    name: "about",
    icon: user
  },
  {
    title: "Education",
    name: "education",
    icon: uni
  },
  {
    title: "Projects",
    name: "projects",
    icon: folder
  },
  {
    title: "Contact",
    name: "contact",
    icon: mail
  }
];

export {personalData, skills, learning, buttons, infoCards, status};
export type {Data, Tech, ButtonType, WhichButtonState};