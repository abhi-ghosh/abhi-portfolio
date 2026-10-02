import {AnimatePresence, motion} from "motion/react"
type RetroPanelProps = {
  title: string;
  children: React.ReactNode;
  colSpan?: 2|3|4;
  delay?: number;
}


//* Tailwind needs full literal class strings at build time not part of it so no `lg:col-span-${colSpan}`
//* only part of `lg:col-span-${colSpan}` is being generated "colSpan" not the entire class, which won't work.

const colSpanClass = { 2: "min-[1200px]:col-span-2", 3: "min-[1200px]:col-span-3", 4: "min-[1200px]:col-span-4" } as const;

export default function RetroPanel({title, children, colSpan, delay}: RetroPanelProps) {
  return (
      <motion.div className={`bg-win-panel border-3d shadow-3d flex flex-col col-span-full
          min-w-0 ${colSpan ? colSpanClass[colSpan] : ""}`}
        initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} exit={{opacity:0}} transition={{delay: delay ? delay * 0.1 : 0}}
      >
        <div className="flex flex-row justify-between items-center bg-win-accent p-2">
          <p className="text-xl font-bold text-white">{title}</p>
          <div className="flex flex-row gap-1">
            {["bg-win-muted", "bg-win-panel", "bg-white"].map((bgColor, index) => (
              <div key={index} className={`w-2 h-2 ${bgColor}`}
              >
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-3 lg:p-4 flex flex-col justify-between">{children}</div>
      </motion.div>
  )
}