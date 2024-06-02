"use client";

import RadioIllustration from "./illustrations/RadioIllustration";
import RadioScreen from "./RadioScreen";
import { useRef } from "react";
import usePlayerState from "../hooks/usePlayerState";
import PlayButtonIllustration from "./illustrations/PlayButtonIllustration";

export default function Radio() {
  const player = useRef<HTMLAudioElement>(null);
  const source = useRef<HTMLSourceElement>(null);

  const { play, pause, isPlaying } = usePlayerState({
    audioRef: player,
    sourceRef: source,
    url: "https://s5.radio.co/s23b8ada46/listen",
  });

  return (
    <div className="relative">
      <RadioIllustration className="w-full px-4 md:px-8" />
      <RadioScreen
        className="absolute left-[8%] top-[61%] h-[24%] w-[61%] xl:left-[7%]"
        isPlaying={isPlaying}
      />
      <div className="absolute right-[18.5%] top-[60%] h-[26%] w-[9%]">
        <audio ref={player}>
          <source ref={source} />
          Your browser does not support the audio element.
        </audio>
        <button className="h-full w-full" onClick={isPlaying ? pause : play}>
          <PlayButtonIllustration className="h-full w-full" />
        </button>
      </div>
    </div>
  );
}
