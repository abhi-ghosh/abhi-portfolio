"use client";
import RetroPanel from "@/components/RetroPanel";
import CustomIntro from "@/components/CustomIntro";
import TinyInfoBlock from "@/components/TinyInfoBlock";
import retroEmail from "@/assets/icons/retroEmail.gif";
import redirectretro from "@/assets/icons/redirectretro.webp";
import Separator from "@/components/Separator";
import copy from "@/assets/icons/copy.webp";
import {contactData, LinkType, ContactStatusType} from "@/components/data";
import {JSX, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "motion/react";
export default function ContactSection(): JSX.Element {

  //* State for which button is clicked for copying
  const [copied, setCopied] = useState<string|null>(null);

  //* Button styles for redirect and copy
  const buttonStyle: string = `flex flex-1 gap-2 px-4 w-auto md:w-25
    justify-center py-3 md:py-0 items-center text-xl
    font-bold border-3d active:shadow-3d active:scale-97
    transition-all duration-200 cursor-pointer`;

  //* Function to copy to clipboard
  const copyClipboard = async (link: string, name: string):Promise<void> => {
    try{
      await navigator.clipboard.writeText(link);
      setCopied(name);
      setTimeout(() => {
        setCopied(null);
      },2000)
    } catch {
      console.error("Brother I have failed to copy, forgive me brother")
    }
  }


  return (
    <section className="sectionGrid">
      {/*//* Get In Touch block */}
      <RetroPanel title="Get_In_Touch.txt" colSpan={3} delay={1}>
        <motion.div className="flex flex-col gap-4"
          initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}}
          transition={{delay:0.2}}
        >
          {/*//* Contact message and icon */}
          <CustomIntro logo={retroEmail}
            primary={contactData.intro.title}
            secondary={[contactData.intro.description]}
          />
          {/*//* Quote */}
          <TinyInfoBlock animate="none" secondary={`"${contactData.intro.quote}"`}
            color="blue" italics={true}
          />
          {/*//* Open to heading and options */}
          <div className="flex flex-col gap-2">
            {/*//* Currently open to */}
            <div className="flex items-center text-lg md:text-xl gap-2 md:gap-3">
              {/*//* Box as bullet */}
              <div className="w-2 h-2 md:w-3 md:h-3 bg-win-main border-3d border"/>
              CURRENTLY OPEN TO<span className="animate-blink">-</span>
            </div>
            {/*//* Open to options */}
            <div className="flex flex-row gap-2 flex-wrap">
              {contactData.availability.map((item:string, index: number):JSX.Element => (
                <motion.p key={item} className="p-1 md:p-2 text-md
                  md:text-lg text-white border-3d bg-win-bg"
                  initial={{scale:0}} animate={{scale:1}} transition={{delay: 0.2*index}}
                >
                    {item}
                </motion.p>
              ))}
            </div>
          </div>
          <Separator/>
          <TinyInfoBlock animate="none" secondary={`"${contactData.intro.quoteB}"`}
            color="yellow" italics={true}
          />
        </motion.div>
      </RetroPanel>

      {/*//* Contact Section */}
      <RetroPanel title="Contact.vcf" colSpan={3} delay={2}>
        {/*//* Get In Touch block */}
        <div className="flex flex-col gap-4">
          {/*//* Rendering Contact links , Names, Icons */}
          {contactData.links.map((link:LinkType, index:number): JSX.Element=>(
            //** Each contact div */
            <motion.div key={link.name} className="flex gap-2 flex-col md:flex-row justify-between"
              initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2*index}}
            >
              {/*//* Image, Name, Tagline */}
              <div className="flex flex-row gap-4 md:gap-6">
                {/*//* Image Container*/}
                <div className="relative min-w-12 aspect-square
                  shrink-0 bg-win-bg border-3d"
                >
                  {/*//* Image */}
                  <Image
                    src={link.icon}
                    alt={link.name}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {/*//* Link Name */}
                  <p className="text-2xl font-bold">{link.name}</p>
                  {/*//* Link Tagline */}
                  <p className=" text-lg text-win-accent">{link.tagline}</p>
                </div>
              </div>
              {/*//* Redirect link & Copy button Container */}
              <div className="flex gap-1 mb-2 justify-between md:flex-row md:gap-4 h-full">
                {/*//* Redirect Link */}
                <Link className={`bg-win-accent text-white ${buttonStyle}
                  hover:bg-win-main`}
                  href={link.url} target="_blank" rel="noopener noreferrer"
                >
                  {link.name === "Email" ? "Mail" : "Open"}
                  <Image src={redirectretro} className="w-5 h-5"
                    width={20} height={20} alt={link.name}
                  />
                </Link>
                {/*//* Copy button */}
                <button className={`${buttonStyle}
                  ${link.name===copied ? "bg-win-bg text-white" : "bg-win-panel"}
                  hover:brightness-90`}
                  onClick={
                    () => copyClipboard(
                      link.name === "Email"
                      ? link.url.replace("mailto:", "")
                      : link.url,
                      link.name
                    )
                  }
                >
                  {link.name === copied ? "Copied!" : "Copy"}
                  {link.name !== copied && <Image src={copy} className="w-5 h-5"
                    width={20} height={20} alt={link.name}
                  />}
                </button>
              </div>
              {/*//* Separator */}
              <div className="block md:hidden">
                <Separator/>
              </div>
            </motion.div>
          ))}
          {/*//* Separator */}
          <div className="hidden md:block">
            <Separator/>
          </div>
          {/*//* Info Blocks */}
          {contactData.status.map((c: ContactStatusType, index: number): JSX.Element=>(
            <motion.div key={c.label}
              initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.4+0.2*index}}
            >
              <TinyInfoBlock primary={c.label} secondary={c.message}
                logo={c.logo} color={c.color} animate={c.animate} smallIcon={c.smallIcon}
              />
            </motion.div>
          ))}
        </div>
      </RetroPanel>
    </section>
  );
}