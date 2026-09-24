import Image from "next/image";
import { JSX } from "react";
import sun from "@/assets/icons/sun.webp";
import HoverMessage from "@/components/HoverMessage";
import { motion } from "motion/react";

type WeatherButtonProps = {
  handleWeatherClick: () => void;
};
export default function WeatherButton({handleWeatherClick}: WeatherButtonProps): JSX.Element {
  return (

    //* Weather Button Container
    <motion.div className="relative aspect-square w-full md:aspect-auto h-full">

      {/*//* Button */}
      <button className="flex flex-row p-0 md:px-3 h-full w-full justify-center items-center gap-3 border-3d text-2xl active:shadow-3d
        cursor-pointer hover:bg-win-accent/10 active:scale-95 transition-[box-shadow,background-color] duration-200"
        onClick={handleWeatherClick}
        >

        {/*//* Button image */}
        <Image className="w-8 h-8 md:w-6 md:h-6" src={sun} alt="sun icon" loading="eager"/>

        {/*//* Button text */}
        <p className="hidden md:block text-sm md:text-xl">Weather.exe</p>
      </button>

      {/*//* Hover Message */}
      <HoverMessage mainMessage={"Click to view weather"} subMessage={"(Location permission required)"} theme="dark" />

    </motion.div>
  )
}