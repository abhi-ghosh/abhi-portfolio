import Image from "next/image";
import { StaticImageData } from "next/image";
import {JSX} from "react";
type CustomIntroProps = {
  logo: StaticImageData;
  primary: string;
  secondary?: string[];
}
export default function CustomIntro({logo, primary, secondary}:CustomIntroProps): JSX.Element {
  return (
    //* Intro, Bio, Closure section */}
    <div className="flex flex-row gap-4">

      {/*//* Image on larger screens */}
      <div className="hidden md:block min-w-15 h-15 p-2 border-3d bg-win-bg">
        <Image src={logo} className="w-full h-full aspect-square" alt="masterChief"/>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          {/*//* Image on mobile */}
          <Image src={logo} className="block md:hidden bg-win-bg shadow-3d
            p-1 border-3d w-8 h-8 aspect-square" alt="masterChief"
          />
          {/*//* Intro */}
          <p className="text-2xl text-win-main">{primary}</p>
        </div>
        {/*//* Bio & Closure */}
        {secondary &&
          secondary.map((item, index) => (
            <p key={index} className="text-lg md:text-xl">
              {item}
            </p>
          ))
        }
      </div>
    </div>
  )
}