import {JSX} from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import {motion} from "motion/react";
type StatusProps = {
  icon: StaticImageData,
  title: string,
  alt: string,
  delay?: number
}
export default function Status({icon, title , alt, delay}: StatusProps): JSX.Element {
  return (

    //* Status Container
    <motion.div className="w-full flex items-center p-2 border-3d justify-center md:justify-start
      bg-win-panel gap-2 md:shadow-3d"
      initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{delay}}
      >

      {/*//* Icon and Title for status*/}
      <Image className="w-5 h-5" src={icon} alt={alt}/>
      <p className="">{title}</p>

    </motion.div>
  )
}