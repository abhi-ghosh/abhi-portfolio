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




type DataType = {
  icon: string | StaticImageData,
  name: string,
  title: string
}

type TechType = Omit<DataType, "title">


type WhichButtonStateType = ButtonType["name"];

type ButtonType = {
    title:"About"|"Education"|"Projects"|"Contact"|"Work EXP"|"WHY?",
    name:"about"|"education"|"projects"|"contact"|"work"|"why",
    icon:StaticImageData,
    tagPrimary:string,
    tagSecondary:string
  }

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

type HobbyType = Omit<DataType, "title">

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
  resume: {link: string, name: string, icon: StaticImageData}[]
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
    {link:"/Abhijit_Ghosh_Resume", name: "Download Resume w/o Photo", icon: pdf},
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
    tagPrimary: "Why this style?",
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

export {personalData, buttons, status, weatherData, aboutMeData, currentlyEnrolled,
  formalEducation, certifications
};
export type {DataType, TechType, ButtonType, WhichButtonStateType, WeatherType,
    WeatherValueType, LocationDataType, LocationType, HobbyType, AboutMeType, EducationType
  };