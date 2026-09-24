import {WeatherValueType, LocationDataType, LocationType} from "@/components/data";

//* Get the user's geolocation from the browser
//* Converts the callback-based Geolocation API into a Promise
  function geoLocation(): Promise<GeolocationPosition>{
    return new Promise((resolve, reject): void => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser."));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      )
    })
  }

//* Use the geolocation Promise to get the weather
//* Uses async/await to consume the Promise and fetch weather data from Open-Meteo
  async function getWeather(): Promise<LocationDataType> {

    const position: GeolocationPosition = await geoLocation();
    const {latitude, longitude}:GeolocationCoordinates = position.coords;

    const url: string =
      `https://api.open-meteo.com/v1/forecast?` +
      `latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m,weather_code` +
      `&temperature_unit=celsius`;

    const weatherFetch: Response = await fetch(url);

    if(!weatherFetch.ok){
      throw new Error();
    }

    const weather:WeatherValueType = await weatherFetch.json();

    //* Use the latitude and longitude to get the city and country
    const locationUrl : string =
        `https://nominatim.openstreetmap.org/reverse?` +
        `lat=${latitude}&lon=${longitude}&format=jsonv2`;

    const locationFetch: Response = await fetch(locationUrl);
    if(!locationFetch.ok){
      throw new Error();
    }

    const locationData:LocationType = await locationFetch.json();

    const city =
          locationData.address.city ??
          locationData.address.town ??
          locationData.address.village;

    const country = locationData.address.country;


    return {
      temperature: weather.current.temperature_2m,
      weatherCode: weather.current.weather_code,
      country: country,
      city: city
    }

  }

  export {getWeather};