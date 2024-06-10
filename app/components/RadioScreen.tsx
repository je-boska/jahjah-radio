"use client";

import PauseIcon from "./svg/PauseIcon";
import PlayIcon from "./svg/PlayIcon";
import Marquee from "react-fast-marquee";

export default function RadioScreen({
  title,
  isPlaying,
  isLive,
  className,
}: {
  title?: string;
  isPlaying: Boolean | undefined;
  isLive: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative flex h-full w-full items-center">
        <div className="w-full">
          <h2 className="hidden pl-4 font-serif text-lg md:block lg:text-2xl xl:pb-2 xl:text-3xl">
            {isLive ? "LIVE NOW:" : "NOW PLAYING:"}
          </h2>
          <div className="w-full pr-7 md:pr-0">
            <Marquee
              className="w-full font-sans text-base italic md:text-xl xl:text-3xl"
              autoFill
            >
              <p className="pr-8">{title}</p>
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
