import { StaticImageData } from "next/image"
import Image from "next/image"
type MainTopHalfProps = {
  title: string,
  tagPrimary: string,
  tagSecondary: string,
}
export default function MainTopHalf({title, tagPrimary, tagSecondary}: MainTopHalfProps) {
  return (
    <div className="text-white flex flex-row justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-4 justify-start items-center">
          <div className="w-4 h-4 md:w-6 md:h-6 shadow-3d border-3d bg-win-panel"/>
          <h1 className="leading-none text-4xl md:text-6xl font-bold">{`${title}${title==="About" ? " Me" : ""}`}</h1>
        </div>
        <p className="text-lg md:text-xl text-white/80">{tagPrimary}</p>
      </div>
      <p className="hidden md:block text-2xl text-white/80">
        {tagSecondary}<span className="animate-ping">_</span>
      </p>
    </div>
  )
}