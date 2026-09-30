import {JSX} from "react";
import Link from "next/link";
type RetroButtonProps = {
  url:string;
  children:React.ReactNode;
  download?:boolean;
  large?:boolean;
}
export default function RetroButton({url, children, download=false, large=true}:RetroButtonProps):JSX.Element {
  return (
      <Link
        href={url} download={download} target={download ? undefined : "_blank"} rel={download ? undefined : "noopener noreferrer"}
        className={`bg-win-bg text-white ${large ? "w-full py-3" : "w-full md:w-max px-3 py-4 md:py-3"}
          shadow-none flex items-center justify-center border-3d hover:brightness-120 active:shadow-3d text-lg
          active:scale-98 transition-all duration-200`}
      >
        {children}
      </Link>
  )
}