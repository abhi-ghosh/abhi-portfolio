import {JSX} from "react";
import Image from "next/image";
import hourGlass from "@/assets/hourGlass.gif"
import HoverMessage from "@/components/HoverMessage";

type BruhButtonProps = {
  errorCode:number|undefined,
  weatherState:"loading"|"error",
  handleWeatherClick: () => void
}

export default function BruhButton({errorCode, weatherState, handleWeatherClick}:BruhButtonProps):JSX.Element {

  const mainMessage =
    errorCode === 1 ? "Location permission denied"
    : errorCode === 2 ? "Location unavailable"
    : errorCode === 3 ? "Location request timed out"
    : "Something went wrong";

  return (
    <div className="flex flex-row items-center
      justify-center relative group h-full w-full aspect-square">

      <button className={`bg-win-main border-3d flex justify-center items-center
        ${weatherState === "loading" ? "" : "hover:bg-win-accent active:scale-95"}
        leading-none font-bold text-xl text-white transition-[scale,background-color]
        duration-200 ease-in-out h-full w-full`}
        onClick={errorCode === 1 || weatherState === "loading" ? () => {} : handleWeatherClick}
      >
        {weatherState === "loading"
        ? <Image className="w-6 h-6 animate-spin" unoptimized src={hourGlass} alt="hourGlass"></Image>
        : <div className="flex flex-row items-center w-max p-0 md:px-4">
            <span className="hidden md:block mr-2">bruh</span>
            <span>:(</span>
          </div>
        }
      </button>

      {/* Hover Message */}
      {weatherState === "error" &&
      <HoverMessage mainMessage={mainMessage}
        subMessage={errorCode === 1 ? "Please allow and refresh page":
        "Click to retry"} theme="light" />
      }
    </div>
  )
}
