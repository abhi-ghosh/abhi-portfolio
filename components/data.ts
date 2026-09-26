import { StaticImageData } from "next/image";
import haloCE from "@/assets/icons/haloCE.webp"
import folder from "@/assets/icons/folder.webp";
import mail from "@/assets/icons/mail.webp";
import uni from "@/assets/icons/uni.webp";
import clear from "@/assets/weatherIcons/clear.png";
import drizzle from "@/assets/weatherIcons/drizzle.png";
import fog from "@/assets/weatherIcons/fog.png";
import mainlyClear from "@/assets/weatherIcons/mainlyClear.png";
import overcast from "@/assets/weatherIcons/overcast.png";
import partlyCloudy from "@/assets/weatherIcons/partlyCloudy.png";
import rain from "@/assets/weatherIcons/rain.png";
import snow from "@/assets/weatherIcons/snow.png";
import thunderStorm from "@/assets/weatherIcons/thunderStorm.png";
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




type Data = {
  icon: string | StaticImageData,
  name: string,
  title: string
}

type Tech = Omit<Data, "title">


type WhichButtonState = ButtonType["name"];

type ButtonType = {
    title:"About"|"Education"|"Projects"|"Contact",
    name:"about"|"education"|"projects"|"contact",
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

    type AboutMeType = {
      intro:string,
      bio: string,
      closure:string,
      skills: Tech[],
      learning: Tech[]
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
    title: "Contact",
    name: "contact",
    icon: mail,
    tagPrimary: "Come say Hi, ask a question, or just share a cool idea.",
    tagSecondary: "Read to work."
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

const currentFocus: {focusIcon: StaticImageData, bulletIcon: StaticImageData, focusPoints: string[]} = {
    focusIcon: rocket,
    bulletIcon: jewel,
    focusPoints:
      ["Improving my front-end skills (React, Next.js, TypeScript)",
        "Learning backend development (Python, Django, SQL)",
        "Building personal projects",
        "Finding remote opportunities and relocating abroad",
        "Creating a life with more freedom and flexibility",
      ]
}

const otherInterests: Omit<Data, "title">[] = [
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
    ]

export {personalData, skills, learning, buttons, status, weatherData, aboutMeData, currentFocus, otherInterests};
export type {Data, Tech, ButtonType, WhichButtonState, WeatherType, WeatherValueType, LocationDataType, LocationType};