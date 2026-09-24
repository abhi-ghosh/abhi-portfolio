import {JSX} from "react";
type HoverMessageProps = {
  mainMessage: string;
  subMessage: string;
  theme:"light" | "dark";
}
export default function HoverMessage({mainMessage, subMessage, theme}:HoverMessageProps): JSX.Element {
  return (
      <div className={`absolute hidden md:flex md:flex-col md:items-center gap-1 font-bold text-lg top-18 left-1/2 -translate-x-1/2
        ${theme === "dark" ? "bg-win-accent text-white" : "bg-win-panel text-black"} border-3d px-3 py-2 w-max text-black opacity-0
          invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 ease-in-out`}
      >
        <p>{mainMessage}</p>
        <p>{subMessage}</p>
      </div>
  );
}