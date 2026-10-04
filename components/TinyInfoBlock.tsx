import Image, { StaticImageData } from "next/image"
import {JSX} from "react";
type TinyInforBlockProps = {
  logo?: StaticImageData;
  primary?:string;
  secondary:string;
  color:"green"|"blue"|"yellow"|"red";
  animate: "ping"|"spin"|"none";
  italics?:boolean;
  smallIcon?:boolean;
}
export default function TinyInfoBlock({logo, primary, secondary, color, animate, italics=false, smallIcon=false}:TinyInforBlockProps):JSX.Element {
  const colors = {
    green:{bg:"bg-green-100", text:"text-green-800"},
    blue:{bg:"bg-blue-100", text:"text-win-main"},
    yellow:{bg:"bg-yellow-100",text:"text-yellow-800"},
    red:{bg:"bg-red-100",text:"text-red-800"}
  }
  const animation: {[key: string]: string} = {"ping":"animate-pingRetro", "spin":"animate-retroSpin", "none":""}

  return (
    <div className={`flex flex-row gap-2 p-4 ${colors[color].bg} shadow-3d`}>
      <div className="flex items-center gap-2">
        {logo && <Image src={logo} alt="certificate" className={`${smallIcon ? "w-3 h-3" : "w-5 h-5"} ${animation[animate]}`}/>}
        {primary && <p className={`text-[15px] md:text-xl ${colors[color].text} font-bold`}>{primary} <span>-</span></p>}
      </div>
      <p className={`text-sm md:text-lg ${italics && "italic"}`}>{secondary}<span className="animate-blink">_</span></p>
    </div>
  )
}