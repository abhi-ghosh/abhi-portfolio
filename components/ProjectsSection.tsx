import RetroPanel from "@/components/RetroPanel";
import {ProjectType, ProjectButtonType} from "@/components/data";
import {JSX} from "react";
import Image from "next/image";
import Link from "next/link";
import arrowLeft from "@/assets/icons/arrowLeft.webp";
import Separator from "@/components/Separator";
import live from "@/assets/icons/live.webp";
import code from "@/assets/icons/code.webp";
import {motion} from "motion/react"
type ProjectsSectionProps = {
  setProject: (p: ProjectButtonType) => void;
  currentProject: ProjectType|undefined;
  projects: ProjectType[];
}
export default function ProjectsSection({setProject, currentProject, projects}: ProjectsSectionProps): JSX.Element|null {

  if (!currentProject) {
    return null;
  }

  const linkStyles = "text-lg md:text-2xl ml-2 flex flex-row justify-center items-center gap-2 p-2 bg-white border-3d transition-all duration-200 text-win-accent";

  return (
    <section className="sectionGrid">
      {/*//* Project List container */}
      <RetroPanel title="Project List.txt" colSpan={2} delay={1}>
        <div className="flex flex-col max-h-100 gap-4 overflow-y-auto border-3d p-2">
          {/*//* Projects */}
          {projects.map((p: ProjectType, index: number): JSX.Element => (
            <motion.button key={index} onClick={()=>setProject(p.id)}
              className={`flex flex-row items-center w-full p-2 border-3d
                ${currentProject.id === p.id ? "shadow-deep bg-win-bg/10" : "shadow-none"}
                hover:brightness-120 active:shadow-3d active:scale-98 transition-all duration-200`}
              initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.1*index}}
            >
              {/*//* Project icon, name and tagline */}
              <div className="flex flex-row gap-4 items-center w-full">
                {/*//* Image */}
                <Image src={p.icon} alt={p.name} className="w-8 md:w-10 h-8 md:h-10" />
                {/*//* Name and tagline container */}
                <div className="text-left">
                  <p className="text-xl md:text-2xl mb-1 font-bold">{p.name}</p>
                  <p className="text-gray-500 text-sm md:text-md">{p.tagline}</p>
                </div>
              </div>
              {/*//* Arrow left icon if current project is selected */}
              {currentProject.id === p.id && <Image src={arrowLeft} alt="arrow left" className="w-6 h-6 animate-blink" />}
            </motion.button>
          ))}
        </div>
      </RetroPanel>

      {/*//* Project Details container */}
      <RetroPanel title="Project Details.md" colSpan={4} delay={2}>
        {/*//* Project details */}
        <motion.div className="flex flex-col max-h-100 overflow-y-auto
            p-4 shadow-3d border-3d gap-3"
            initial={{scaleX:0, width:0, opacity:0}}
            animate={{scaleX:1, width:"auto", opacity:1}}
            transition={{delay: 0.5}}
        >
          {/*//* Project year phone */}
          <p className="block md:hidden text-md
              md:text-xl font-bold text-left"
          >
            {currentProject.year}
          </p>
          {/*//* Project image, name, tagline & date */}
          <div className="flex gap-3">
            {/*//* Project image */}
            <Image src={currentProject.icon} alt={currentProject.name}
              className="w-12 h-12 md:w-16 md:h-16 p-2 bg-win-bg border-3d"
            />
            {/*//* Project name & yer container */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row w-full justify-between">
                {/*//* Project name */}
                <p className="text-2xl md:text-3xl font-bold">{currentProject.name}</p>
                {/*//* Project year desktop */}
                <p className="hidden md:block text-md
                    md:text-xl font-bold text-right">
                    {currentProject.year}
                </p>
              </div>
              {/*//* Project tagline */}
              <p className="text-gray-500 text-md md:text-xl">{currentProject.tagline}</p>
            </div>
          </div>
          {/*//* Separator */}
          <Separator/>
          {/*//* Project description & features */}
          <p className="text-md md:text-lg">{currentProject.description}</p>
          {/*//* Project features */}
          <ul>
            <li className="text-xl md:text-2xl text-win-accent font-bold">Features:</li>
            {currentProject.features.map((feature: string, index: number): JSX.Element => (
                <li key={index} className="text-md md:text-xl">
                  <Image src={arrowLeft} alt="arrow left" className="w-4 h-4 inline-block mr-2 rotate-180" />
                  {feature}
                </li>
            ))}
          </ul>
        </motion.div>
      </RetroPanel>

      {/*//* Tech Stack */}
      <RetroPanel title="Tech Stack.md" colSpan={4} delay={3}>
        {/*//* Tech stack container */}
        <motion.div className="flex flex-wrap gap-4 p-4 shadow-3d border-3d" layout
          initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.6, layout:{delay: 0.02}}}
        >
          {currentProject.techStack.map((tech, index) => {
            const src = typeof tech.icon === "string"
              ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`
              : tech.icon;
            return (
              //*//* Tech stack item
              <motion.div layout key={tech.name} className="flex flex-row justify-center items-center w-max
                p-2 bg-white border-3d h-max gap-2"
                initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay: 0.02*index}}
              >
                  <Image src={src}
                    alt={tech.name} width={30} height={30}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                <p className="text-md md:text-xl">{tech.name}</p>
              </motion.div>
            )})
          }
        </motion.div>
      </RetroPanel>

      {/*//* Links */}
      <RetroPanel title="Links.txt" colSpan={2} delay={4}>
        <motion.div className="flex flex-col gap-4 p-4 shadow-3d border-3d"
          initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: 0.5}}
        >
          {currentProject.links.map((link, index) => (
            <Link key={index} href={link.url || "#"} target={link.url ? "_blank" : "_self"} rel="noopener noreferrer"
              className={`${linkStyles} ${link.url ? "hover:bg-win-bg/10 active:shadow-3d active:scale-98":"cursor-not-allowed opacity-50"}`}
            >
              <Image src={link.name === "Source Code" ? code : live} alt={link.name} className="w-6 h-6 md:w-8 md:h-8" />
              {link.name}
            </Link>
          ))}
        </motion.div>
      </RetroPanel>
    </section>
  );
}