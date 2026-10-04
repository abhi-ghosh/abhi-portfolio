import {JSX} from "react";
import Image from "next/image";
import { EducationType } from "@/components/data";
import {motion} from "motion/react";
import RetroButton from "./RetroButton";
import Separator from "./Separator";
import cert from "@/assets/icons/cert.webp"
import redirect from "@/assets/icons/redirect.webp"
type EducationTypeProps = EducationType & {
  children?:JSX.Element;
  long?:boolean;
  delay?:number;
  url?:string;
}
export default function EducationBlock({provider, title, years, description,
    icons, children, long=false, delay = 0, url}:EducationTypeProps):JSX.Element {

  const duration: JSX.Element = <p className="text-win-muted text-md md:text-lg">{years}</p>
  const certButton = url ?  <RetroButton url={url} large={false}>
                        <div className="flex flex-row items-center gap-2">
                          <Image src={cert} alt="certificate" className="w-5 h-5"/>
                          <p>View Certificate</p>
                          <Image src={redirect} alt="redirect" className="w-5 h-5"/>
                        </div>
                      </RetroButton> : null

  return (
    //* Main Container
    <motion.section className="flex flex-col gap-4"
      initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{delay}}
    >

      {/*//* Education container */}
      <div className="flex gap-4">
        {/*//* Icons */}
        <div className={`flex ${!long ? "flex-col" : "flex-col md:flex-row"}
          gap-2 justify-start`}>
          {icons.map((icon, index) => (
          <motion.div key={icon.name} className="bg-white p-1 border-3d h-15 aspect-square max-w-15"
            initial={{scale:0}} animate={{scale:1}} transition={{delay: 0.2 * index }}
          >
            <Image src={icon.icon} alt={icon.name}/>
          </motion.div>
          ))}
        </div>

        {/*//* Where did it get the education? */}
        <div className="flex flex-col gap-2 w-full">
          <motion.div className="flex flex-row justify-between items-center"
            initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{delay: delay}}
          >
            <div className="flex flex-row gap-2 items-center">
              <p className="bg-win-accent text-white text-sm md:text-md w-max
                px-3 py-1 border-3d border"
              >
                {provider}
              </p>
              {/*//* Duration of the course (if long) */}
              {long && duration}
            </div>
          </motion.div>

          {/*//* Name of the course */}
          <p className="font-bold text-xl md:text-2xl">{title}</p>

          {/*//* Duration of the course */}
          {!long && <p className="text-win-muted text-lg md:text-xl">{years}</p>}

          {/*//* Description of the course */}
          <p className="text-md md:text-lg">
            {description}
          </p>
        </div>

        {/*//* Certificate Links */}
        {url &&
          <div className="hidden md:block">
            {certButton}
          </div>
        }
      </div>

      {/*//* Certificate Links On Phone */}
      {url &&
        <div className="block md:hidden">
          {certButton}
        </div>
      }

      {/*//* Separator bar */}
      <Separator/>

      {/*//* Anything else one might wanna add */}
      {children}
    </motion.section>
  );
}