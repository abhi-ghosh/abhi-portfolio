import { skills, learning, Tech } from "@/components/data";
import {JSX} from "react";

export default function Skills({which}: { which: "skills" | "learning" }): JSX.Element {
  const arr: Tech[] = which === "skills" ? skills : learning;
  return (
    <div className="grid grid-cols-3 gap-3">
      {arr.map((a: Tech): JSX.Element => (
        <div key={a.name} className="flex items-center gap-1">
          <div className="flex items-center justify-center bg-white p-0.5">
            <i className={`devicon-${a.icon}-plain w-4 h-4`}></i>
          </div>
          <p className="text-md">{a.name}</p>
        </div>
      ))}
    </div>
  );
}