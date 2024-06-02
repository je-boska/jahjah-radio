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
      <div className="relative flex h-full w-full items-center">
        <div>
          <h2 className="hidden pl-4 font-serif text-lg md:block lg:text-2xl xl:pb-2 xl:text-3xl">
            NOW PLAYING:
          </h2>
          <div className="pr-7 md:pr-0">
            <Marquee className="font-sans text-base italic md:text-xl xl:text-3xl">
              <p className="pr-4">
                Live broadcast from Jah Jah x Adidas x Snipes celebration event
              </p>
            </Marquee>
          </div>
        </div>
        <div className="absolute right-1 top-1/2 w-5 -translate-y-1/2 sm:right-2 sm:w-7 md:top-2 md:translate-y-0 lg:w-10">
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </div>
      </div>
    </div>
  );
}
