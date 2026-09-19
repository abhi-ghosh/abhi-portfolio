"use client";
import { useState } from "react";
import {JSX} from "react";
import Panel from "@/components/Panel";
import {buttons, ButtonType, WhichButtonState} from "@/components/data";
import Button from "@/components/Button";
import NavBar from "@/components/Navbar";
export default function Home(): JSX.Element| null {

  //* Button States
  const [whichButton, setWhichButton] = useState<WhichButtonState>("about");

  //* Current Button
  const currentButton = buttons.find((button)=> button.name === whichButton);

  //* If current button is not found return null (TypeScript reccomendation)
  if (!currentButton) {
    return null;
  }

  return (
    //* Main Container
    <div className="bg-win-main min-h-screen ">

      {/*//* Navbar */}
      <NavBar title={currentButton.title} icon={currentButton.icon}/>

      {/*//* Panel */}
      <Panel>
          {buttons.map((button:ButtonType, index:number): JSX.Element => (
            <Button name={button.name} key={button.name} title={button.title} icon={button.icon}
              setWhichButton={setWhichButton} whichButton={whichButton} delay={index * 0.1}
            />
          ))}
      </Panel>
    </div>
  );
}
