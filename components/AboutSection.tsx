import {JSX} from "react";
import {motion} from "motion/react"
import RetroPanel from "@/components/RetroPanel";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import textFile from "@/assets/icons/textFile.webp"
import {aboutMeData, HobbyType} from "@/components/data";
export default function AboutSection(){
  const skillPanels = [
    {
      title: "Primary Skills.exe",
      colSpan: 3 as const,
      which: "skills" as const,
    },
    {
      title: "Currently Learning.exe",
      colSpan: 2 as const,
      which: "learning" as const,
    },
  ];

  return (
    <section className="sectionGrid">
    {/*//* About Me Section Custom retro panel */}
      <RetroPanel title="About Me.txt" colSpan={3}>

        {/*//* Intro, Bio, Closure section */}
        <div className="flex flex-row gap-4">

          {/*//* Image on larger screens */}
          <div className="hidden md:block min-w-15 h-15 p-2 border-3d bg-win-bg">
            <Image src={textFile} className="w-full h-full aspect-square" alt="masterChief"/>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              {/*//* Image on mobile */}
              <Image src={textFile} className="block md:hidden bg-win-bg shadow-3d
                p-1 border-3d w-8 h-8 aspect-square" alt="masterChief"
              />
              {/*//* Intro */}
              <p className="text-2xl text-win-main">{aboutMeData.intro}</p>
            </div>
            {/*//* Bio & Closure */}
            {[aboutMeData.bio, aboutMeData.closure].map((item, index) => (
              <p key={index} className="text-lg md:text-xl">
                {item}
              </p>
            ))}
          </div>
        </div>
        {/*//* Download Resume Button */}
        <Link
          href="/resume.pdf"
          download
          className="bg-win-accent mt-4 text-white w-full shadow-none
            text-xl py-3 flex items-center justify-center border-3d
            hover:brightness-120 active:shadow-3d active:scale-98 transition-all duration-200"
        >
          Download Resume
        </Link>
      </RetroPanel>

      {/*//* Primary skills & learning section retro panel*/}
      {skillPanels.map((skillPanel, index:number): JSX.Element => (
        <RetroPanel key={index} title={skillPanel.title} colSpan={skillPanel.colSpan} delay={index+1}>
          <Skills which={skillPanel.which}/>
        </RetroPanel>
      ))}

      {/*//* Current focus section retro panel*/}
      <RetroPanel title="Current Focus.md" colSpan={2} delay={4}>
        <div className="flex flex-col h-full">
          <div className="flex flex-row items-center gap-4">
            <Image src={aboutMeData.currentFocus.focusIcon} className="w-10 h-10 md:w-12 md:h-12 bg-white p-1 border-3d" alt="rocket"/>
            <p className="text-3xl text-bold">What I&apos;m working on.<span className="animate-blink">_</span></p>
          </div>
          <ul className="flex-1 flex flex-col justify-around gap-4 mt-4 bg-win-bg py-4  text-white border-3d">
            {aboutMeData.currentFocus.focusPoints.map((focus: string, index: number): JSX.Element =>(
              <li key={index} className="flex flex-row items-center px-3 gap-5">
                <Image src={aboutMeData.currentFocus.bulletIcon} className="w-5 h-5" alt="rocket"/>
                <p className="text-lg">{focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </RetroPanel>

      {/*//* Hobbies section*/}
      <RetroPanel title="Hobbies.exe" colSpan={2} delay={5}>
        <ul className="grid grid-cols-2 gap-6">
          {aboutMeData.hobbies.map((hobby: HobbyType, index: number)=>(
            <motion.li key={index} className="flex flex-row  items-center gap-4 min-w-0"
              initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.15*index}}
            >
              <Image src={hobby.icon} className="shrink-0 w-10 h-10 bg-white p-1 border-3d" alt={`${hobby.name} icon`}/>
              <p className="text-xl min-w-0 wrap-break-word">{hobby.name}</p>
            </motion.li>
          ))}
        </ul>
      </RetroPanel>

    </section>
  )
}