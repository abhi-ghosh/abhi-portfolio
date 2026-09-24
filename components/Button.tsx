import Image from "next/image";
import { motion } from "motion/react";
import {WhichButtonState, ButtonType} from "@/components/data";

type ButtonProps= Omit<ButtonType, "tagPrimary" | "tagSecondary"> & {
  setWhichButton: (whichButton: WhichButtonState) => void,
  whichButton: WhichButtonState
  delay?:number
}

export default function Button({title, icon, name, setWhichButton, whichButton, delay } : ButtonProps) {
  return (
    //* Button Container
    <motion.button className={`flex flex-row items-center justify-start gap-3 border-3d
              px-4 py-3 text-2xl cursor-pointer hover:bg-white/15 active:scale-95
              transition-[box-shadow,background-color] duration-200
              ${whichButton === name ? "bg-win-panel text-black hover:bg-win-panel shadow-3d"
                : "text-white"}`
            }
            onClick={()=>setWhichButton(name)}
            initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{delay}}
    >
      {/*//* Icon and Title for button*/}
      <Image className="w-6 h-6" src={icon} alt="icon"/>
      <p className="text-xl">{title}</p>

    </motion.button>
  )
}