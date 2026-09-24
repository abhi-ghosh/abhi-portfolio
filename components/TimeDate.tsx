"use client";
import {JSX} from "react";
import {useEffect, useState} from "react";
import { motion} from "motion/react";
export default function TimeDate(): JSX.Element | null {

  //* Time and Date State
  const [now, setNow] = useState<Date | null>(null);

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
  const time: string = now
    ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "00:00:00 AM";

  //* Date Formatting
  const date: string = now
    ? now.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })
    : "xxx 00, 0000";

  //* Weekday Formatting
  const weekday: string = now
    ? now.toLocaleDateString("en-US", { weekday: "long" })
    : "xxxxxxxx";

  return (
    //* Time and Date Container
      <motion.div className="text-right"
      initial={{x:100, opacity:0}} animate={{x:0, opacity:1}}
      >

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
      </motion.div>
  );

}