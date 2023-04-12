"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { clearInterval } from "timers";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
type Props = {};

const Timer = (props: Props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // const target = new Date("12/31/2023 23:59:59");
    const actualDay = new Date().getDate();
    const actualMonth = new Date().getMonth();
    const actualYear = new Date().getFullYear();
    let fechaFuturo = new Date(actualYear, actualMonth, actualDay + 10);
    console.log(fechaFuturo);
    const target = new Date(fechaFuturo);
    const interval: NodeJS.Timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="relative mx-auto mt-0 h-screen w-auto bg-veryDarkBlue md:mt-20 md:h-[800px] md:w-[1400px] ">
        <div className="flex flex-col pt-36">
          <h1 className="text-1xl mb-20 hidden justify-center text-center font-medium uppercase tracking-widest text-white md:flex">
            We&apos;re launching soon
          </h1>
          <h1 className="mb-20 text-center text-2xl font-medium uppercase tracking-widest text-white md:hidden">
            We&apos;re launching
            <br /> soon
          </h1>
          <div className="mx-auto mb-[80%] flex gap-x-5 md:mb-80">
            <div className="flex flex-col items-center justify-self-center">
              <div className=" mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-DarkDesaturatedDlue shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <span className="block text-4xl font-bold text-softRed  md:text-6xl">
                  {days < 10 ? `0${days}` : `${days}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-grayishBlue">
                days
              </span>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <div className=" mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-DarkDesaturatedDlue shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <span className="block text-4xl font-bold text-softRed  md:text-6xl">
                  {hours < 10 ? `0${hours}` : `${hours}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-grayishBlue">
                hours
              </span>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <div className=" mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-DarkDesaturatedDlue shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <span className="block text-4xl font-bold text-softRed  md:text-6xl">
                  {minutes < 10 ? `0${minutes}` : `${minutes}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-grayishBlue">
                minutes
              </span>
            </div>
            <div className="flex flex-col items-center justify-self-center">
              <div className=" mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-DarkDesaturatedDlue shadow-veryDarkBlueBlack md:h-24  md:w-24 ">
                <span className="block text-4xl font-bold text-softRed  md:text-6xl">
                  {seconds < 10 ? `0${seconds}` : `${seconds}`}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-grayishBlue">
                seconds
              </span>
            </div>
          </div>
          <div className="z-50 flex justify-center gap-x-4">
            <BsFacebook color="hsl(237,18%,59%)" />
            <BsPinterest color="hsl(237,18%,59%)" />
            <BsInstagram color="hsl(237,18%,59%)" />
          </div>
        </div>
        <Image
          src="/images/bg-stars.svg"
          alt="stars-img"
          width={1400}
          height={800}
          className="absolute top-0 object-cover object-center"
        />
        <Image
          src="/images/pattern-hills.svg"
          alt="stars-img"
          width={1400}
          className="absolute bottom-0 object-cover object-center"
          height={800}
        />
      </div>
    </div>
  );
};

export default Timer;
