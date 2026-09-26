import { aboutMeData, Tech } from "@/components/data";
import {JSX} from "react";

export default function Skills({which}: { which: "skills" | "learning" }): JSX.Element {
  const arr: Tech[] = which === "skills" ? aboutMeData.skills : aboutMeData.learning;
  const rows = which === "skills" ? "grid grid-cols-3 gap-5" : "grid grid-cols-2 gap-8";
  return (
    <div className={rows}>
      {arr.map((a: Tech): JSX.Element => {
        const imageSize=
          which === "skills"
            ? `text-xl md:text-2xl`
            : `text-2xl md:text-3xl`;

        const textSize =
          which === "skills"
            ? "text-md md:text-xl"
            : "text-xl md:text-2xl";

        const divSize =
          which === "skills"
            ? `h-7 w-7 md:h-8 md:w-8`
            : `h-10 w-10`;

        return (
          <div key={a.name} className={`flex items-center ${which === "skills" ? "gap-2" : "gap-4"}`}>
            <div className={`flex items-center justify-center ${divSize} ${which === "skills" ? "bg-white text-black"
                : "bg-win-main text-white"} border-3d`}>
              <i className={`devicon-${a.icon}-plain ${imageSize} shrink-0`}></i>
            </div>

            <p className={`${textSize} wrap-break-word min-w-0`}>{a.name}</p>
          </div>
        );
      })}
    </div>
  );
}