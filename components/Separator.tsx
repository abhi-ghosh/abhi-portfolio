import {JSX} from "react";
export default function Separator({bright=false}:{bright?:boolean}): JSX.Element {
  return (
    <div className={`w-full h-0.5 ${bright ? 'bg-win-panel/50' : 'bg-win-muted/30'} shrink-0`}/>
  )
}
