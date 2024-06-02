"use client";

import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import Marquee from "react-fast-marquee";

export default function RadioScreen({
  isPlaying,
  className,
}: {
  isPlaying: Boolean | undefined;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative sm:pt-2 lg:pt-4 xl:pt-8">
        <h2 className="hidden font-serif text-xl md:block md:text-2xl xl:text-3xl">
          Now playing:
        </h2>
        <div className="pr-6 md:pr-0">
          <Marquee className="font-sans text-base italic md:text-xl xl:text-3xl">
            Live broadcast from Jah Jah x Adidas x Snipes celebration event
          </Marquee>
        </div>
        <div className="absolute right-0 top-0 w-6 sm:top-2 md:w-10">
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </div>
      </div>
    </div>
  );
}
