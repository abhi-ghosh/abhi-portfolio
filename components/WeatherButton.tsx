import Image from "next/image";
import { JSX } from "react";
import sun from "@/assets/icons/sun.webp";
import HoverMessage from "@/components/HoverMessage";

type WeatherButtonProps = {
  handleWeatherClick: () => void;
};
export default function WeatherButton({handleWeatherClick}: WeatherButtonProps): JSX.Element {
  return (

    //* Weather Button Container
    <div className="relative">

      {/*//* Button */}
      <button className="flex flex-row items-center gap-3 border-3d px-3 py-2 text-2xl active:shadow-3d
        cursor-pointer hover:bg-win-accent/10 active:scale-95 transition-[box-shadow,background-color] duration-200"
        onClick={handleWeatherClick}
        >

        {/*//* Button image */}
        <Image className="w-5 h-5 md:w-6 md:h-6" src={sun} alt="sun icon" loading="eager"/>

        {/*//* Button text */}
        <p className="hidden md:block text-sm md:text-xl">Weather.exe</p>
      </button>

      {/*//* Hover Message */}
      <HoverMessage mainMessage={"Click to view weather"} subMessage={"(Location permission required)"} theme="dark" />

    </div>
  )
}