import { StaticImageData } from "next/image";
import haloCE from "@/assets/icons/haloCE.webp"
import folder from "@/assets/icons/folder.webp";
import mail from "@/assets/icons/mail.webp";
import uni from "@/assets/icons/uni.webp";
import clear from "@/assets/weatherIcons/clear.webp";
import drizzle from "@/assets/weatherIcons/drizzle.webp";
import fog from "@/assets/weatherIcons/fog.webp";
import mainlyClear from "@/assets/weatherIcons/mainlyClear.webp";
import overcast from "@/assets/weatherIcons/overcast.webp";
import partlyCloudy from "@/assets/weatherIcons/partlyCloudy.webp";
import rain from "@/assets/weatherIcons/rain.webp";
import snow from "@/assets/weatherIcons/snow.webp";
import thunderStorm from "@/assets/weatherIcons/thunderStorm.webp";
import computer from "@/assets/icons/computer.webp";
import hitman from "@/assets/icons/hitman.webp";
import music from "@/assets/icons/music.webp";
import cat from "@/assets/icons/cat.webp";
import singing from "@/assets/icons/singing.webp";
import plane from "@/assets/icons/plane.webp";
import watch from "@/assets/icons/watch.webp";
import phone from "@/assets/icons/phone.webp";
import jewel from "@/assets/icons/jewel.webp";
import rocket from "@/assets/icons/rocket.webp";
import fragrance from "@/assets/icons/fragrance.webp";
import dinosaur from "@/assets/icons/dinosaur.webp";
import meta from "@/assets/educationIcons/meta.webp";
import coursera from "@/assets/educationIcons/coursera.webp";
import scrimba from "@/assets/educationIcons/scrimba.webp";
import makaut from "@/assets/educationIcons/makaut.webp";
import det from "@/assets/educationIcons/det.webp";
import gnit from "@/assets/educationIcons/gnit.webp";
import duoFunny from "@/assets/educationIcons/duoFunny.webp";
import pdf from "@/assets/icons/pdf.webp";
import briefcase from "@/assets/icons/briefcase.webp";
import win from "@/assets/icons/win.webp";
import linkDefender from "@/assets/projectIcons/linkDefender.webp";
import patientSync from "@/assets/projectIcons/patientSync.webp";
import pokedex from "@/assets/projectIcons/pokedex.webp";
import littleLemon from "@/assets/projectIcons/littleLemon.webp";
import virusTotal from "@/assets/projectIcons/virusTotal.webp";
import websocket from "@/assets/projectIcons/websocket.webp";
import envelope from "@/assets/contactIcons/envelope.webp";
import github from "@/assets/contactIcons/github.webp";
import greenorb from "@/assets/icons/greenorb.webp";
import jobsdb from "@/assets/contactIcons/jobsdb.webp";
import linkedin from "@/assets/contactIcons/linkedin.webp";
import network from "@/assets/icons/network.webp";
import windesk from "@/assets/windesk.gif";
import floppy from "@/assets/icons/floppy.webp"
import cd from "@/assets/icons/cd.webp"
import { small } from "motion/react-client";

//* Data type
type DataType = {
  icon: string | StaticImageData,
  name: string,
  title: string
}

//* Tech type
type TechType = Omit<DataType, "title">

//* Button state type
type WhichButtonStateType = ButtonType["name"];

//* Button type
type ButtonType = {
    title:"About"|"Education"|"Projects"|"Contact"|"Work EXP"|"WHY?",
    name:"about"|"education"|"projects"|"contact"|"work"|"why",
    icon:StaticImageData,
    tagPrimary:string,
    tagSecondary:string
  }

//* Weather type
type WeatherType = {
  category: string,
  codes: number[],
  icon: StaticImageData
}

//* Weather API response type
type WeatherValueType = {
current: {
  temperature_2m: number;
  weather_code: number;
};
};

//* Location API response type
type LocationType = {
  address: {
    city?: string;
    town?: string;
    village?: string;
    country: string;
  };
};

//* Location data type (final returned object)
type LocationDataType = {
  temperature: number,
  weatherCode: number,
  city: string|undefined,
  country: string
}

//* Hobby type
type HobbyType = Omit<DataType, "title">

//*Resume type
type ResumeType = {
  link: string,
  name: string,
  icon: StaticImageData
}

//* About Me type
type AboutMeType = {
  intro:string,
  bio: string,
  closure:string,
  skills: TechType[],
  learning: TechType[],
  currentFocus: {focusIcon: StaticImageData,
      bulletIcon: StaticImageData,
      focusPoints: string[]
    }
  hobbies: HobbyType[],
  resume: ResumeType[]
}

//* Education type
type EducationType = {
  provider: string;
  title: string;
  years: string;
  description: string;
  icons: {
    icon: StaticImageData;
    name: string;
  }[];
};

//* Projects Type
type ProjectType = {
  id: string;
  name: string;
  tagline: string;
  year: string;
  icon: string | StaticImageData;
  description: string;
  features: string[];
  techStack: TechType[];
  links: {name: string, url: string|false}[];
};

//*Link Type
type LinkType = {
  name:string;
  url:string;
  tagline:string;
  icon:StaticImageData;
};

//*Contact Status Type
type ContactStatusType = {
    label:string;
    message:string;
    logo: StaticImageData;
    color: "green"|"blue"|"yellow"|"red";
    animate: "ping"|"spin"|"flip"|"none";
    smallIcon:boolean;
}

//* Contact Type
type ContactType = {
  intro:{
    title: string;
    description: string;
    quote: string;
    quoteB:string;
  };
  availability: string[];
  links: LinkType[];
  responseTime:string;
  status: ContactStatusType[];
}

//* Project Button Type
type ProjectButtonType = typeof projects[number]["id"];

//* Memory Data Type
type MemoryDataType = {
  computer: StaticImageData,
  badge: string;
  quote: string;
  paragraphs: string[];
  footer: ContactStatusType[];
}

const personalData: {name: string, title: string} = {
  name: "Abhijit Ghosh",
  title: "Front-End Engineer"
}

const aboutMeData: AboutMeType = {
  intro: "Hi, I'm Abhijit.",
  bio: `I'm a front-end engineer from Kolkata, India, with a background in Food Technology and a curiosity for figuring out how things work.
        I enjoy turning ideas into useful, polished interfaces and learning whatever I need to make them better.`,
  closure: `Outside of code, I'm into watches, fragrances, music, gaming and anything that lets me make or tinker with something.
            I'm happiest when I'm learning, solving problems and building things.`,
  skills: [
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
            },
            {
              name: "npm",
              icon: "npm",
            }
          ],
  learning: [
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
            ],
  currentFocus:{
    focusIcon: rocket,
    bulletIcon: jewel,
    focusPoints:
      ["Improving my front-end skills (React, Next.js, TypeScript)",
        "Learning backend development (Python, Django, SQL)",
        "Building personal projects",
        "Finding opportunities to relocate abroad",
        "Creating a life with more freedom and flexibility",
      ]
  },
  hobbies: [
    {
      name: "Video Games",
      icon: hitman,
    },
    {
      name: "Cats",
      icon: cat,
    },
    {
      name: "Travel",
      icon: plane,
    },
    {
      name: "Watches",
      icon: watch,
    },
    {
      name: "Fragrances",
      icon: fragrance,
    },
    {
      name: "Phones",
      icon: phone,
    },
    {
      name: "Computers",
      icon: computer,
    },
    {
      name: "Music Production",
      icon: music,
    },
    {
      name: "Singing",
      icon: singing,
    },
    {
      name: "Dinosaurs",
      icon: dinosaur,
    }
  ],
  resume: [
    {link:"/Abhijit_Ghosh_Resume.pdf", name: "Download Resume w/o Photo", icon: pdf},
    {link:"/Abhijit_Ghosh_Resume_with_Photo.pdf", name: "Download Resume w/ Photo", icon: pdf},
  ]
};

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


const buttons: ButtonType[] = [
  {
    title: "About",
    name: "about",
    icon: haloCE,
    tagPrimary: "I like figuring things out and making things useful.",
    tagSecondary: "More than just code."
  },
  {
    title: "Education",
    name: "education",
    icon: uni,
    tagPrimary: "Always learning, always building, always growing.",
    tagSecondary: "The things that got me here."
  },
  {
    title: "Projects",
    name: "projects",
    icon: folder,
    tagPrimary: "Some things I've built, learned from, and also enjoyed.",
    tagSecondary: "Built to solve problems."
  },
  {
    title: "Work EXP",
    name: "work",
    icon: briefcase,
    tagPrimary: "Some things I've worked on, learned from, and also enjoyed.",
    tagSecondary: "Same person different worlds."
  },
  {
    title: "Contact",
    name: "contact",
    icon: mail,
    tagPrimary: "Come say Hi, ask a question, or just share a cool idea.",
    tagSecondary: "Read to work."
  },
  {
    title: "WHY?",
    name: "why",
    icon: win,
    tagPrimary: "A small tribute to the computer that started it all.",
    tagSecondary: "Going full circle."
  }
];

const weatherData: WeatherType[] = [
  {
    category: "Clear",
    codes: [0],
    icon: clear,
  },
  {
    category: "Mainly clear",
    codes: [1],
    icon: mainlyClear,
  },
  {
    category: "Partly cloudy",
    codes: [2],
    icon: partlyCloudy,
  },
  {
    category: "Overcast",
    codes: [3],
    icon: overcast,
  },
  {
    category: "Fog",
    codes: [45, 48],
    icon: fog,
  },
  {
    category: "Drizzle",
    codes: [51, 53, 55, 56, 57],
    icon: drizzle,
  },
  {
    category: "Rain",
    codes: [61, 63, 65, 66, 67, 80, 81, 82],
    icon: rain,
  },
  {
    category: "Snow",
    codes: [71, 73, 75, 77, 85, 86],
    icon: snow,
  },
  {
    category: "Thunderstorm",
    codes: [95, 96, 99],
    icon: thunderStorm,
  },
];

const currentlyEnrolled: EducationType = {
  provider: "META X COURSERA",
  title: "Meta Back-End Developer Professional Certificate",
  years: "2026 - Present",
  description:
    "Back-end development program covering Python, Django, SQL databases, APIs, and software engineering fundamentals.",
  icons: [{icon:meta, name: "meta icon"}, {icon: coursera, name: "coursera icon"}],
};

const formalEducation: EducationType = {
  provider: "MAKAUT X GNIT",
  title: "B.Tech in Food Technology",
  years: "2014 - 2018",
  description:
    "Studied food processing, food chemistry, microbiology, quality control, and product development as part of a four-year technology degree.",
  icons: [{icon: makaut, name:"makut icon"}, {icon:gnit, name:"gnit icon"}],
};

const certifications: (EducationType & {url:string})[] = [
  {
    provider: "META X COURSERA",
    title: "Meta Front-End Developer Professional Certificate",
    years: "2023-2026",
    description:
      "Front-end development program covering HTML, CSS, JavaScript, React, responsive design, version control, and modern web development.",
    icons: [{icon:meta, name: "meta icon"}, {icon: coursera, name: "coursera icon"}],
    url: "https://www.coursera.org/account/accomplishments/specialization/HUDK7APL2L2D?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
  },
  {
    provider: "SCRIMBA X COURSERA",
    title: "Learn TypeScript",
    years: "2026",
    description:
      "Practical TypeScript course covering types, interfaces, generics, and applying type safety to JavaScript applications.",
    icons: [{icon:scrimba, name: "scrimba icon"}, {icon:coursera, name: "coursera icon"}],
    url:"https://www.coursera.org/account/accomplishments/verify/79ZUSWVWEJIJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    provider: "SCRIMBA X COURSERA",
    title: "Learn Tailwind CSS",
    years: "2026",
    description:
      "Practical Tailwind CSS course focused on utility-first styling, responsive layouts, and building interfaces efficiently.",
    icons: [{icon:scrimba, name: "scrimba icon"}, {icon:coursera, name: "coursera icon"}],
    url:"https://www.coursera.org/account/accomplishments/verify/LFDEAW3177O3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    provider: "DUOLINGO",
    title: "Duolingo English Test",
    years: "2026",
    description:
      "English proficiency assessment covering reading, writing, listening, and speaking.",
    icons: [{icon: det, name: "duolingo icon"}, {icon: duoFunny, name: "duolingo funny"}],
    url:"https://certs.duolingo.com/0s0suo78jl1ja56s"
  },
];

const projects: ProjectType[] = [
  {
    id: "linkdefender",
    name: "LinkDefender",
    tagline: "Know before you click.",
    year: "Feb 2026 - Present",
    icon: linkDefender,
    description:
      "LinkDefender is a Chrome extension designed to help users identify potentially malicious or unsafe URLs before visiting them. It sends submitted URLs to the VirusTotal API for analysis, then presents the results through a clear, state-driven interface that separates loading, safe, dangerous, and error states. The extension also handles URL validation, asynchronous result polling, vendor-level security analysis, and timeout or API failures while remaining lightweight and easy to understand.",
    features: [
      "Scan URLs using the VirusTotal API",
      "Safe and Dangerous security verdicts",
      "Vendor-by-vendor security analysis",
      "Asynchronous polling for analysis results",
      "Client-side URL validation",
      "Error and timeout handling",
      "Chrome Extension built with Manifest V3",
    ],
    techStack: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Vite", icon: "vite" },
      { name: "VirusTotal API", icon: virusTotal },
      { name: "JavaScript", icon: "javascript" },
      { name: "Chrome Extensions", icon: "chrome" }
    ],
    links: [
      {name:"Source Code", url: "https://github.com/abhi-ghosh/LinkDefender"},
      {name:"Live Demo", url: false}
    ]
  },

  {
    id: "patient-sync",
    name: "Patient Sync",
    tagline: "Real-time patient intake & monitoring.",
    year: "Jul 2026 - Present",
    icon: patientSync,
    description:
      "Patient Sync is a real-time patient registration and monitoring system built around WebSocket communication. As a patient fills out the registration form, their activity is synchronized instantly with a separate staff monitoring dashboard, allowing staff to see the patient's current progress, active field, validation errors, and overall completion percentage in real time. The project combines a responsive registration experience with a live monitoring interface and a persistent WebSocket connection between the client and server.",
    features: [
      "Real-time patient and staff synchronization",
      "Patient registration form",
      "Live field validation",
      "Completion percentage tracking",
      "Active field tracking",
      "Validation error monitoring",
      "Live patient activity status",
      "Responsive desktop and mobile layouts",
    ],
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "WebSockets", icon: websocket },
      { name: "Node.js", icon: "nodejs" },
      { name: "JavaScript", icon: "javascript" },
    ],
    links: [
      {name:"Source Code", url: "https://github.com/abhi-ghosh/patient-sync"},
      {name:"Live Demo", url: "https://patient-sync-tan.vercel.app/"}
    ],
  },

  {
    id: "portfolio",
    name: "My Portfolio",
    tagline: "A Windows 98-inspired dev portfolio",
    year: "Sep 2026 - Present",
    icon: win,
    description:
      "This portfolio is a personal exploration of combining a nostalgic Windows 98-inspired interface with a modern React application architecture. The site recreates the visual language of classic Windows through custom panels, buttons, borders, icons, typography, and interaction patterns while remaining responsive across modern screen sizes. It uses reusable components and data-driven sections for projects, education, certifications, skills, and other personal information, with Motion animations adding movement without losing the retro character of the interface.",
    features: [
      "Windows 98-inspired UI",
      "Responsive design",
      "Animated page transitions",
      "Interactive project showcase",
      "Education and certification timeline",
      "Skills and current learning sections",
      "Downloadable resumes",
      "Custom retro UI components"
    ],
    techStack: [
      {name:"Next.js", icon:"nextjs"},
      {name:"React", icon:"react"},
      {name:"TypeScript", icon:"typescript"},
      {name:"Tailwind CSS", icon:"tailwindcss"},
      {name:"Motion", icon:"framermotion"}
    ],
    links: [
      {name:"Source Code", url: "https://github.com/abhi-ghosh/abhi-portfolio"},
      {name:"Live Demo", url: "https://abhiwillcode.vercel.app/"}
    ],
  },

  {
    id: "pokedex",
    name: "Pokédex",
    tagline: "Gotta know them all.",
    year: "Jul 2026 - Present",
    icon: pokedex,
    description:
      "Pokédex is a modern Pokémon exploration application built around the PokéAPI. Users can search for Pokémon through an autocomplete interface with keyboard navigation, then explore detailed information including types, abilities, base statistics, moves, and Pokémon cries. The application also includes version-aware move filtering, responsive layouts, loading and error states, dark and light modes, and Motion-powered interactions to make navigating between Pokémon feel more dynamic.",
    features: [
      "Pokémon search with autocomplete",
      "Keyboard navigation",
      "Pokémon information and abilities",
      "Base statistics",
      "Move explorer",
      "Version-aware move filtering",
      "Pokémon cries",
      "Dark and light mode",
      "Responsive design",
      "Loading and error states",
    ],
    techStack: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Motion", icon: "framermotion" },
      { name: "PokéAPI", icon: pokedex },
    ],
    links: [
      {name:"Source Code", url: "https://github.com/abhi-ghosh/pokedex"},
      {name:"Live Demo", url: "https://pokedex-khaki-alpha.vercel.app/"}
    ],
  },

  {
    id: "little-lemon",
    name: "Little Lemon",
    tagline: "A modern restaurant experience.",
    year: "Jul 2025 - Jul 2026",
    icon: littleLemon,
    description:
      "Little Lemon is a responsive restaurant web application developed as the capstone project for the Meta Front-End Developer Professional Certificate. The application provides an interactive restaurant experience with a browsable menu, sorting and filtering, shopping cart functionality, dynamic quantity and total updates, and a table reservation flow with client-side validation. It also includes login and registration pages, routing between different areas of the application, and responsive layouts designed to work across desktop and mobile devices.",
    features: [
      "Interactive restaurant menu",
      "Shopping cart functionality",
      "Live quantity and total updates",
      "Menu sorting and filtering",
      "Table reservation system",
      "Client-side form validation",
      "Login and registration pages",
      "Responsive desktop and mobile layouts",
    ],
    techStack: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React Router", icon: "reactrouter" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
    links: [
      {name:"Source Code", url: "https://github.com/abhi-ghosh/little-lemon-capstone"},
      {name:"Live Demo", url: "https://little-lemon-capstone-kappa.vercel.app/"}
    ],
  },
];

const contactData: ContactType = {
  intro: {
    title: "I'd love to hear from you!",
    description:
      "Whether it's a job opportunity, a project idea, feedback or just a friendly message, feel free to reach out. I'm always open to interesting conversations and new opportunities.",
    quote: "I stay curious, keep building & make myself useful.",
    quoteB:"If I don't know how to solve it, I'll figure it out.",
  },

  availability: [
    "Full-time employment",
    "Front-end roles",
    "Remote positions",
    "International opportunities",
    "Willing to relocate",
  ],

  links: [
    {
      name: "Email",
      url: "mailto:a7ghosh@gmail.com",
      tagline:"Slide into my email, efficiently.",
      icon: envelope,
    },
    {
      name: "GitHub",
      url: "https://github.com/abhi-ghosh",
      tagline:"Come see what I broke, then fixed.",
      icon: github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhiwillcode",
      tagline:"Look mom, I'm a professional.",
      icon: linkedin,
    },
    {
      name: "JobsDB",
      url: "https://th.jobsdb.com/profiles/abhijit-ghosh-p67jmjrk3c",
      tagline:"I love coding and lots of money.",
      icon: jobsdb,
    },
  ],

  responseTime: "I usually respond within 24 hours.",

  status: [{
    label:"CONNECTION PROTOCOL",
    message:"Reply time <= 24hrs",
    logo: network,
    color: "blue",
    animate: "none",
    smallIcon: false,
  },
  {
      label: "ONLINE",
      message: "Ready to connect",
      logo: greenorb,
      color: "green",
      animate: "ping",
      smallIcon: true,
    }
  ]
}

const memoryData: MemoryDataType = {

  computer: windesk,

  badge: "WHY WINDOWS 98?",

  quote:
    '"Before I knew what code was, I knew the feeling of discovering something on a computer."',

  paragraphs: [
    "My first real memory of a computer goes back to school. We had old machines running Windows 98. To someone else they might have looked outdated, but to me they felt like magic, the heavy monitor, the click of the mouse, the tiny icons, and the feeling that an entire world was waiting behind that blue screen.",

    "I wanted to click everything, understand how it worked, and see what would happen next. I didn't know it then, but that curiosity would stay with me. What started as wanting to understand a computer eventually became wanting to understand what I could build with one.",

    "This portfolio is a small tribute to where that curiosity began. The computer is different now, but the feeling hasn't changed, I'm still learning, still building, and still wondering what happens when I click the next thing.",
  ],

  footer: [
    {
      label:"THEN",
      message: "Learning to use a computer",
      logo:floppy,
      color:"blue",
      animate:"flip",
      smallIcon:false
    },
    {
      label:"NOW",
      message: "Learning to build for one",
      logo:cd,
      color:"green",
      animate:"spin",
      smallIcon:false
    }
  ],

};

export {personalData, buttons, status, weatherData, aboutMeData,
  currentlyEnrolled, formalEducation, certifications, projects,
  contactData, memoryData
};

export type {DataType, TechType, ButtonType, WhichButtonStateType, WeatherType,
    WeatherValueType, LocationDataType, LocationType, HobbyType, AboutMeType, EducationType,
    ProjectType, ProjectButtonType, LinkType, ResumeType, ContactStatusType};