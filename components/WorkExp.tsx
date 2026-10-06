import {JSX} from "react";
import {WorkExperienceType, WorkExperienceButtonType} from "@/components/data";
import RetroPanel from "@/components/RetroPanel";
import Separator from "@/components/Separator";
import TextOptions from "@/components/TextOptions";
import Image from "next/image";
import Badge from "@/components/Badge";
import {motion} from "motion/react";
import kitty from "@/assets/kitty.gif";
type WorkExpProps = {
  currentCompany: WorkExperienceType|undefined;
  setCompany: (name:WorkExperienceButtonType)=>void;
  workExperience: WorkExperienceType[]

}
export default function WorkExp({currentCompany, setCompany,workExperience }:WorkExpProps): JSX.Element|null{

  //* Check if currentCompany exists if not return null
  if (!currentCompany){
    return null;
  }

  //* Animation for y axis
  const yAnimation: Record<string, Record<string, number>> = {
    initial: {y:-50, opacity:0},
    animate: {y:0, opacity:1}
  }

  //* Button style
  const buttonStyle: string = `p-2 w-full flex gap-5 items-center border-3d border-4
    active:shadow-3d active:scale-98 transition-all duration-200`;

  return (
    //* Work Experience Container
    <section className="sectionGrid">

      <RetroPanel title="Work History.txt" colSpan={4} delay={1}>

        {/*//* Work History Container */}
        <div className="flex flex-col gap-4">

          {/*//* Buttons Div */}
          <motion.div className="grid grid-cols-1 min-[900px]:grid-cols-2
            min-[1200px]:grid-cols-3 gap-2"
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}
          >

            {/*//* Buttons */}
            {workExperience.map((company: WorkExperienceType, index: number): JSX.Element => (
              <motion.button key={company.id} className={`${buttonStyle}
                ${company.id === currentCompany.id
                  ? "bg-win-bg text-white shadow-3d"
                  : "bg-win-desktop hover:bg-win-bg/10"}`
                }
                initial={{y:-50, opacity:0}} animate={{y:0, opacity:1}}
                transition={{delay:0.1*index}}
                onClick={():void => setCompany(company.id)}
              >

                {/*//* Work Number */}
                <div className="leading-none h-full aspect-square p-3 flex items-center
                  justify-center bg-win-accent text-white text-2xl border-3d"
                >
                  {company.number}
                </div>

                {/*//* Role Name and Period */}
                <div className="text-left">
                  <p className="text-lg md:text-xl font-bold mb-1">{company.name}</p>
                  <p className="text-sm md:text-md">{company.period}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/*//* Separator */}
          <Separator/>

          {/*//* Work Details div */}
          <motion.div className={`${currentCompany.color.bg} flex gap-4 p-2 shadow-3d items-stretch`}
            {...yAnimation} transition={{delay:0.5}}
          >

            {/*//* Work Image Div */}
            <div className={`relative min-w-10 ${currentCompany.color.picBg} h-full w-20 aspect-square shrink-0 border-3d`}>
              <Image src={currentCompany.icon} alt={currentCompany.name}
                sizes="80px" fill className="object-contain p-1"/>
            </div>

            {/*//* Badge, Title, Period & Role DIV */}
            <div className="flex flex-col gap-2">
              {/*//* Badge */}
              <Badge title={currentCompany.type} light={true} small={true}
                animation="y" delay={0.5}
              />
              {/*//* Title */}
              <p className="text-xl md:text-2xl font-bold">{currentCompany.role}</p>
              {/*//* Period & Role */}
              <div className="text-md md:text-lg flex flex-col md:flex-row gap-1 md:gap-3 text-gray-600">
                {/*//* Period */}
                <p>{currentCompany.period}</p>
                {/*//* Role */}
                <p className="hidden md:block">·</p>
                <p className="">{currentCompany.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </RetroPanel>

      {/*//* Skills Container */}
      <RetroPanel title="Skills.txt" colSpan={2} delay={2}>
        {/*//* Skills */}
        <TextOptions arr={currentCompany.tools} color="light" delay={0.1}/>
      </RetroPanel>

      {/*//* What I Did Container */}
      <RetroPanel title="Role.txt" colSpan={4} delay={3}>

        {/*//* What I Did DIV*/}
        <div className="flex flex-col gap-4">
          {/*//* Image & Title */}
          <div className="flex gap-3 items-center">
            <Image src={currentCompany.icon2} width={40} height={40}
              alt={currentCompany.name} className="bg-win-bg p-1 border-3d"
            />
            <p className="bold text-3xl">WHAT I DID
              <span className="animate-blink">_</span>
            </p>
          </div>

          {/*//* What I Did List */}
          <ul className="flex flex-col gap-2">
            {currentCompany.description.map((item:string,index:number): JSX.Element=>(
              <motion.li key={item} className="text-md md:text-xl
                grid grid-cols-[20px_1fr]"
                {...yAnimation} transition={{delay:0.2*index}}
              >
                <span className="font-bold text-win-bg">{index+1}. </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </RetroPanel>

      {/*//* Kitty!!!!! */}
      <RetroPanel title="Kitty.exe" colSpan={2} delay={4}>
        <div className="relative min-h-50 w-full bg-win-bg h-full">
          <Image src={kitty} alt="kitty"
            fill
            className="object-contain border-3d"
            sizes="180px"
            unoptimized
          />
        </div>
      </RetroPanel>
    </section>
  );
}