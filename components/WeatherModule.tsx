import {JSX} from "react";
import Image from "next/image";
import {weatherData, LocationDataType, WeatherType} from "@/components/data";
type WeatherModuleProps = {
  locationData: LocationDataType | null;
};

export default function WeatherModule({locationData}:WeatherModuleProps): JSX.Element|null {

  //* If locationData is null return null (defensive coding)
  if (!locationData) {
    return null;
  }

  //* Destructure locationData using defensive coding
  const city:string|undefined = locationData.city ?? "";
  const country:string = locationData.country;

  //* Find the weather object for weather forecast and icon
  const weatherObj: WeatherType|undefined = weatherData.find((weather)=> weather.codes.includes(locationData.weatherCode));

 //* Return the weather module
  return (
    <div className="flex h-full w-auto aspect-square md:aspect-auto flex-col md:flex-row items-center gap-1 md:gap-3 border-3d px-2 py-1 bg-win-main text-white">

      {/*//* Weather Icon only if there is a weatherObj (defensive coding) */}
      {weatherObj && (
        <Image
          src={weatherObj.icon}
          className="w-6 h-6 md:w-10 md:h-10 object-contain"
          alt="weather icon"
        />
      )}

      <div className="border-white/50 p-0 md:pr-3 md:border-r-2">
        <p className="text-sm md:text-2xl">{`${locationData.temperature}°C`}</p>
        <p className="hidden md:block text-sm">{weatherObj?.category}</p>
      </div>

      <div className="border-white hidden md:block">
        <p className="text-sm md:text-lg">{city[0].toUpperCase()+city.slice(1)}</p>
        <p className="text-sm md:text-lg">{country[0].toUpperCase()+country.slice(1)}</p>
      </div>
    </div>
  );
}