import RetroPanel from "@/components/RetroPanel";
import {ProjectType, ProjectButtonType} from "@/components/data";
import {JSX} from "react";
import Image from "next/image";
import arrowLeft from "@/assets/icons/arrowLeft.webp";
import Separator from "@/components/Separator";
type ProjectsSectionProps = {
  setProject: (p: ProjectButtonType) => void;
  currentProject: ProjectType|undefined;
  projects: ProjectType[];
}
export default function ProjectsSection({setProject, currentProject, projects}: ProjectsSectionProps): JSX.Element|null {
  if (!currentProject) {
    return null;
  }
  return (
    <section className="sectionGrid">
      {/*//* Project List container */}
      <RetroPanel title="Project List.txt" colSpan={2}>
        <div className="flex flex-col max-h-100 gap-4 overflow-y-auto border-3d p-2">
          {/*//* Projects */}
          {projects.map((p: ProjectType, index: number): JSX.Element => (
            <button key={index} onClick={()=>setProject(p.id)}
              className={`flex flex-row items-center w-full p-2 border-3d
                ${currentProject.id === p.id ? "shadow-deep bg-win-bg/10" : "shadow-none"}
                hover:brightness-120 active:shadow-3d active:scale-98 transition-all duration-200`}
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
            </button>
          ))}
        </div>
      </RetroPanel>

      {/*//* Project Details container */}
      <RetroPanel title="Project Details.md" colSpan={4}>
        {/*//* Project details */}
        <div className=" flex flex-col max-h-100 overflow-y-auto
            p-4 shadow-3d border-3d gap-3"
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
        </div>
      </RetroPanel>

      <RetroPanel title="Project Details.md" colSpan={4}>
        <p>Projects</p>
      </RetroPanel>
      <RetroPanel title="Project Details.md" colSpan={2}>
        <p>Projects</p>
      </RetroPanel>
    </section>
  );
}