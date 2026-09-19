import Image from "next/image";
import { StaticImageData } from "next/image";
import { ReactNode, JSX } from "react";
type WeatherButtonProps = {
  img: StaticImageData,
  title: string,
  message: string|ReactNode
}
export default function WeatherButton({img, title, message}: WeatherButtonProps): JSX.Element {
  return (
    //* Weather Button Container
    <div>

      {/*//* Button */}
      <button className="flex flex-row items-center gap-3 border-3d px-3 py-2 text-2xl active:shadow-3d
        cursor-pointer hover:bg-win-accent/10 active:scale-95 transition-[box-shadow,background-color] duration-200"
        >

        {/*//* Button image */}
        <Image className="w-5 h-5 md:w-6 md:h-6" src={img} alt="sun icon"/>

        {/*//* Button text */}
        <p className="hidden md:block text-sm md:text-xl">{title}</p>
      </button>

      {/*//* Hover Message */}
      <div className="absolute right-0 md:right-32 top-full mt-5 opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible bg-win-panel border-3d
                      px-2 py-1 md:px-3 md:py-2  whitespace-nowrap text-center
                      transform-opacity duration-200 ease-in-out text-sm md:text-lg
              before:content-['']
              before:absolute
              before:-top-2
              md:before:right-30
              before:right-25
              before:border-l-8
              before:border-r-8
              before:border-b-8
              before:border-l-transparent
              before:border-r-transparent
            before:border-b-win-panel"
      >
        {message}
      </div>
    </div>
  )
}