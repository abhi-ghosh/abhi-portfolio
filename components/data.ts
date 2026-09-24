import { StaticImageData } from "next/image";
import user from "@/assets/icons/user.png";
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

export {personalData, skills, learning, buttons, infoCards, status, weatherData};
export type {Data, Tech, ButtonType, WhichButtonState, WeatherType, WeatherValueType, LocationDataType, LocationType};