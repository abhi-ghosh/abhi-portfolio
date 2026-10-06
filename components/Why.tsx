import {JSX} from "react"
import Image from "next/image"
import {memoryData, ContactStatusType} from "@/components/data"
import RetroPanel from "@/components/RetroPanel";
import TinyInfoBlock from "@/components/TinyInfoBlock";
import {motion} from "motion/react"
import Badge from "@/components/Badge";
export default function Why(): JSX.Element{

  //* y axis animation
  const yAnimate = {initial:{y:-100, opacity:0}, animate:{y:0, opacity:1}}

  return (
    //* Why section
    <section className="sectionGrid">
      {/*//* Memories block */}
      <RetroPanel title="Memories.md">
        {/*//* Memories block */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 min-h-140
            bg-no-repeat"
        >
          {/*//* Image container */}
          <motion.div className="relative flex-1 shrink-0 bg-retro-grid
            border-3d border-5 retro-corners min-h-50"
            initial={{scale:0}} animate={{scale:1}} transition={{delay: 0.2}}
          >
            {/*//* Image */}
            <Image
              src={memoryData.computer}
              alt="windesk"
              fill
              className="object-contain w-80 h-80 p-7 md:p-10
                drop-shadow-[4px_4px_0_#000]"
              sizes="200px"
            />
          </motion.div>
          <div className="flex-2 flex flex-col gap-3 md:gap-4">
            {/*//* Badge */}
            <Badge title={memoryData.badge} animation="x"
              delay={0.5} light={true}
            />
            {/*//* Big heading quote */}
            <motion.h1 className="text-[25px] md:text-[30px]
                lg:text-[37px] font-bold"
              {...yAnimate} transition={{delay: 0.3}}
            >
              {memoryData.quote}
            </motion.h1>
            {/*//* Multicolored line*/}
            <div className="">
              {["bg-win-bg","bg-pink-500","bg-win-main"]
                .map((bgColor:string, index:number): JSX.Element => (
                  <motion.div key={bgColor}
                    className={`w-10 h-2 ${bgColor} inline-block`}
                    initial={{scale:0}} animate={{scale:1}} transition={{delay: 0.3*index}}
                  />
              ))}
            </div>
            {/*//* Main paragraphs */}
            {memoryData.paragraphs.map((item, index): JSX.Element => (
              <motion.p key={index} className="text-md md:text-xl"
              {...yAnimate} transition={{delay: 0.4+0.1*index}}
              >
                {item}
              </motion.p>
            ))}
            {/*//* Dashed border */}
            <motion.div className="border border-b-win-bg border-dashed my-1 md:my-4"
              initial={{width:0}} animate={{width:"auto"}} transition={{delay:0.8}}
            />
            {/*//* Footer */}
            <div className="flex flex-col md:flex-row gap-2">
              {/*//* Footer blocks */}
              {memoryData.footer.map((item:ContactStatusType, index: number): JSX.Element => (
                <motion.div key={item.label} className="w-full"
                  {...yAnimate} transition={{delay: 0.8+0.1*index}}
                >
                  <TinyInfoBlock primary={item.label} animate={item.animate}
                    secondary={item.message} logo={item.logo} color={item.color}
                    smallIcon={item.smallIcon}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </RetroPanel>
    </section>
  )
}