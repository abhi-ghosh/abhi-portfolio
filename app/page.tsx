"use client";
import { useState } from "react";
import {JSX} from "react";
import Panel from "@/components/Panel";
import {buttons, ButtonType, WhichButtonState, LocationDataType} from "@/components/data";
import Button from "@/components/Button";
import NavBar from "@/components/Navbar";
import {getWeather} from "@/components/services";
import WeatherButton from "@/components/WeatherButton";
import WeatherModule from "@/components/WeatherModule";
import BruhButton from "@/components/BruhButton";
export default function Home(): JSX.Element| null {

  //* Button States
  const [whichButton, setWhichButton] = useState<WhichButtonState>("about");

  //* Weather state
  const [weather, setWeather] = useState<LocationDataType | null>(null);

  //* Weather error
  const [weatherError, setWeatherError] = useState<{code:number, message:string}|null>(null);

  //* Weather Button state
  const [weatherButtonState, setWeatherButtonState] = useState<"loading"|"error"|"success"|"default">("default");

  //* Current Button
  const currentButton = buttons.find((button)=> button.name === whichButton);

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
    switch(weatherButtonState) {
    case("error"):
    case("loading"):
      weatherUI = <BruhButton handleWeatherClick={handleWeatherClick} errorCode={weatherError?.code} weatherState={weatherButtonState}/>;
      break;
    case("success"):
      weatherUI = <WeatherModule locationData={weather}/>;
      break;
    default:
      weatherUI = <WeatherButton handleWeatherClick={handleWeatherClick}/>;
      break;
  }

  return (
    //* Main Container
    <div className="bg-win-main min-h-screen ">

      {/*//* Navbar */}
      <NavBar title={currentButton.title} icon={currentButton.icon}>
        {weatherUI}
      </NavBar>

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
