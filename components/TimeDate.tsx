"use client";
import {JSX} from "react";
import {useEffect, useState} from "react";
export default function TimeDate(): JSX.Element {

  //* Time and Date State
  const [now, setNow] = useState<Date>(new Date());

//* Update time and date every second
//* useState initializes `now` with the current date and time.
//* useEffect runs once after the component mounts and sets up
//* an interval that updates `now` every second.
//* The cleanup function clears the interval when the component
//* unmounts, preventing the interval from continuing to run.
//* The empty dependency array [] ensures the effect only runs once.
//* Without it, a new interval would be created after every render.

  useEffect(()=>{
    const interval = setInterval(()=> {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  },[]);

  //* Time Formatting
  const time: string = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  //* Date Formatting
  const date: string = now.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  //* Weekday Formatting
  const weekday: string = now.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    //* Time and Date Container
    <div className="text-right">

      {/*//* Time */}
      <p className="text-[15px] font-bold md:text-lg">
        {time}
      </p>

      {/*//* Date, different format for mobile and desktop */}
      <p className="text-[15px] font-bold md:text-lg">
        {date}
        <span className="hidden md:inline">, </span>
        <span className="block md:inline">{weekday}</span>
      </p>
    </div>
  );

}