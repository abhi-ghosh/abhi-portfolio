import { aboutMeData, TechType } from "@/components/data";
import {JSX} from "react";
import {motion} from "motion/react"

export default function Skills({which}: { which: "skills" | "learning" }): JSX.Element {
  const arr: TechType[] = which === "skills" ? aboutMeData.skills : aboutMeData.learning;
  const rows = which === "skills" ? "grid grid-cols-3 gap-4 md:gap-5" : "grid grid-cols-2 gap-8";
  return (
    <div className={rows}>
      {arr.map((a: TechType, index: number): JSX.Element => {
        const imageSize=
          which === "skills"
            ? `text-xl md:text-2xl`
            : `text-2xl md:text-3xl`;

        const textSize =
          which === "skills"
            ? "text-sm md:text-xl"
            : "text-xl md:text-2xl";

        const divSize =
          which === "skills"
            ? `h-6 w-6 md:h-8 md:w-8`
            : `h-10 w-10`;

        return (
          <motion.div key={a.name} className={`flex items-center ${which === "skills" ? "gap-2" : "gap-4"}`}
            initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: which === "skills" ? 0.05*index : 0.3*index}}
          >
            <div className={`flex items-center p-3 justify-center ${divSize} ${which === "skills" ? "bg-white text-black"
                : "bg-win-main text-white"} border-3d`}>
              <i className={`devicon-${a.icon}-plain ${imageSize} shrink-0`}></i>
            </div>

            <p className={`${textSize} wrap-break-word min-w-0`}>{a.name}</p>
          </motion.div>
        );
      })}
    </div>
  );
}