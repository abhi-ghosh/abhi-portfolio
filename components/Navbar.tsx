import {JSX} from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import TimeDate from "./TimeDate";
import { AnimatePresence, motion } from "motion/react";

type NavbarProps = {
  title: string;
  icon: StaticImageData;
  children: JSX.Element|null
}

export default function NavBar({title, icon, children}:NavbarProps): JSX.Element {
  return (

    //* Navbar Container
    <motion.nav className="flex h-18 justify-between items-stretch py-2 px-4 w-screen bg-win-panel"
      initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2}}
    >

      {/*//* Image and Current Section */}
      <motion.div className="flex items-center gap-3 md:gap-5"
        initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.2}}
      >
        {/*//* Image */}
        <div className="p-1 h-full flex justify-center items-center bg-win-b border-3d bg-win-bg">
          <Image className="h-full w-auto" src={icon} alt="icon"/>
        </div>

        {/*//* Current Section */}
        <h1 className="text-2xl md:text-4xl font-bold">{title}.exe</h1>
      </motion.div>

      {/*//* Weather and Time Container */}
      <motion.div className="flex items-center gap-3 md:gap-10 relative group h-full"
        initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.3}}
      >

        {/*//* Weather Stuff */}
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>

        {/*//* Time */}
        <TimeDate/>

      </motion.div>
    </motion.nav>
  )
}