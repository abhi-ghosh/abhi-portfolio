"use client";
import { useState } from "react";
import {JSX} from "react";
import {motion} from "motion/react"
import Panel from "@/components/Panel";
import {buttons, ButtonType, WhichButtonState, LocationDataType} from "@/components/data";
import Button from "@/components/Button";
import NavBar from "@/components/Navbar";
import {getWeather} from "@/components/services";
import WeatherButton from "@/components/WeatherButton";
import WeatherModule from "@/components/WeatherModule";
import BruhButton from "@/components/BruhButton";
import MainTopHalf from "@/components/MainTopHalf";
export default function Home(): JSX.Element| null {

  //* Fade animation for weather modules
  const fade = {
    initial: { opacity:0 },
    animate: { opacity:1 },
    exit: { opacity:0 },
    transition: { duration: 0.15 },
  };

  //* Button States
  const [whichButton, setWhichButton] = useState<WhichButtonState>("about");

  //* Weather state
  const [weather, setWeather] = useState<LocationDataType | null>(null);

  //* Weather error
  const [weatherError, setWeatherError] = useState<{code:number, message:string}|null>(null);

  //* Weather Button state
  const [weatherButtonState, setWeatherButtonState] = useState<"loading"|"error"|"success"|"default">("default");

  //* Current Button
  const currentButton: ButtonType|undefined = buttons.find((button)=> button.name === whichButton);

  //* If current button is not found return null (TypeScript reccomendation)
  if (!currentButton) {
    return null;
  }

  //* Weather button onClick handler
  const handleWeatherClick: () => Promise<void> = async (): Promise<void> => {
    setWeatherButtonState("loading");
    //* Fetch weather using the getWeather function inside a try/catch block
    try {
      const {temperature, weatherCode, city, country} = await getWeather();
      setWeather({temperature, weatherCode, city, country});
      console.log(`Temperature: ${temperature}°C, Weather Code: ${weatherCode}, City: ${city}, Country: ${country}`);
      setWeatherButtonState("success");
    } catch (error) {
        if (error instanceof GeolocationPositionError) {
          setWeatherError({
            code: error.code,
            message: error.message
          });
        } else {
          setWeatherError({
            code: 0,
            message: "Something went wrong"
          });
        }
        console.error(error);
        setWeatherButtonState("error");
      }
  }

  //* Weather UI
    let weatherUI: null|JSX.Element = null;
    switch (weatherButtonState) {
      case "error":
      case "loading":
        weatherUI = (
          <motion.div key="bruh" {...fade}>
            <BruhButton
              handleWeatherClick={handleWeatherClick}
              errorCode={weatherError?.code}
              weatherState={weatherButtonState}
            />
          </motion.div>
        );
        break;
      case "success":
        weatherUI = (
          <motion.div key="module" {...fade}>
            <WeatherModule locationData={weather} />
          </motion.div>
        );
        break;
      default:
        weatherUI = (
          <motion.div key="button" {...fade}>
            <WeatherButton handleWeatherClick={handleWeatherClick} />
          </motion.div>
        );
    }

  return (
    //* Main Container
    <div className="bg-win-main min-h-screen ">

      {/*//* Navbar */}
      <NavBar title={currentButton.title} icon={currentButton.icon}>
        {weatherUI}
      </NavBar>

      {/*//* Panel */}
      <div className="flex flex-col md:flex-row">
        <Panel>
            {buttons.map((button:ButtonType, index:number): JSX.Element => (
              <Button name={button.name} key={button.name} title={button.title} icon={button.icon}
                setWhichButton={setWhichButton} whichButton={whichButton} delay={index * 0.1}
              />
            ))}
        </Panel>
        <div className="h-screen w-full p-4 border-3d">
          <MainTopHalf title={currentButton.title} tagPrimary={currentButton.tagPrimary}
            tagSecondary={currentButton.tagSecondary}
          />
        </div>
      </div>
    </div>
  );
}
