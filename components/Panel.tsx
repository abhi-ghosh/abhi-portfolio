import Image from "next/image";
import pfp from "@/assets/pfp.jpeg";
import {JSX} from "react";
import {personalData, status} from "@/components/data";
import Status from "@/components/Status";
import computer from "@/assets/icons/computer.webp";
import earth from "@/assets/icons/earth.webp";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

//* Since children is an array of JSX elements of type JSX.Element
//* We have to use ReactNode
type PanelProps = {
  children: ReactNode;
};

export default function Info ({children}: PanelProps): JSX.Element {

  return (
    <AnimatePresence>
        <motion.div className="p-4 w-screen h-min md:w-min md:h-screen border-3d"
          initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}}
        >

        {/*//* Name, Image, Title & Status */}
        <div className="flex flex-row md:flex-col gap-4">

          {/*//* Image */}
          <div className="w-25 h-25 md:w-40 md:h-40 overflow-hidden border-3d border-4">
            <Image className="w-full h-full" loading="eager" src={pfp} alt="abhi"/>
          </div>

          {/*//* Name, Title */}
          <div className="flex flex-col justify-center items-start gap-1">
            <h1 className="text-4xl md:text-3xl text-white">{personalData.name}</h1>
            <h2 className="text-2xl md:text-lg text-win-panel">{personalData.title}</h2>
          </div>
        </div>

        {/*//* Status */}
        <div className="flex flex-row md:flex-col justify-around md:justify-between gap-2
          mt-4 p-2 md:p-0 bg-win-panel shadow-3d md:shadow-none md:bg-transparent border">
          {status.map((item, index) => (
            <Status key={item.name} icon={item.name === "ready"
              ? computer : earth} title={item.title} alt={item.alt} delay={index * 0.1}
            />
          ))}
        </div>

        {/*//* Border */}
        <div className="w-full bg-win-panel/50 h-0.5 my-4 md:my-6"></div>

        {/*//* Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {children}
        </div>

      </motion.div>
    </AnimatePresence>
  )
}