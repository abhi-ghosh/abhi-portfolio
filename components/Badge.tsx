import {JSX} from "react";
import {motion} from "motion/react";
type BadgeProps = {
  title: string;
  light?: boolean;
  small?: boolean;
  animation: "x"|"y";
  delay:number;
}
export default function Badge ({title, light=false,small=false, animation="y",delay}:BadgeProps):JSX.Element {
  const animate = {
    x:{
      initial:{x:100, opacity:0}, animate:{x:0, opacity:1}
    },
    y:{
      initial:{y:-20, opacity:0}, animate:{y:0, opacity:1}
    }
  }
  return (
    <motion.p className={`${small ? "text-sm md:text-md w-max px-3 py-1": "p-2 text-xs md:text-lg"}
      ${light ? "bg-win-bg" : "bg-win-accent"}
      text-white w-max border-3d`}
      {...animate[animation]}
      transition={{delay: delay}}
    >
      {title}
    </motion.p>
  )
}
