import {motion} from "motion/react"
import {JSX} from "react"
type TextOptionsProps = {
  arr:string[];
  color:"light"|"dark";
  delay?:number;
}

export default function TextOptions({arr, color, delay=0.2}: TextOptionsProps): JSX.Element {
  const colorStyle: Record<"light"|"dark", string> = {
    light: "bg-white text-black",
    dark: "bg-win-bg text-white"
  }
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {arr.map((item:string, index: number):JSX.Element => (
        <motion.p key={item} className={`p-1 md:p-2 text-md
          md:text-lg border-3d ${colorStyle[color]}`}
          initial={{scale:0}} animate={{scale:1}} transition={{delay: delay*index}}
        >
            {item}
        </motion.p>
      ))}
    </div>
  )
}