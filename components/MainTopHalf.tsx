import {AnimatePresence, motion} from "motion/react"
import {JSX} from "react"
type MainTopHalfProps = {
  title: string,
  tagPrimary: string,
  tagSecondary: string,
}

export default function MainTopHalf({title, tagPrimary, tagSecondary}: MainTopHalfProps): JSX.Element {
  return (
    <motion.div className="text-white flex flex-row justify-between mb-6"
      initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}}
    >
      <AnimatePresence mode="wait">
        <motion.div key={title} className="flex flex-col gap-2"
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.1}}
        >
          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="w-4 h-4 md:w-6 md:h-6 shadow-3d border-3d bg-win-panel animate-retroSpin"/>
            <h1 className="leading-none text-4xl md:text-6xl font-bold">{`${title}${title==="About" ? " Me" : ""}`}</h1>
          </div>
          <AnimatePresence mode="wait">
            <motion.p key={tagPrimary} className="text-lg md:text-xl text-white/80"
              initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} exit={{y:100, opacity:0}}
            >
              {tagPrimary}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p key={tagSecondary} className="hidden md:block text-2xl text-white/80"
        initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} exit={{x:100, opacity:0}}
        >
          {tagSecondary}<span className="animate-blink">_</span>
        </motion.p>
      </AnimatePresence>
    </motion.div>
  )
}