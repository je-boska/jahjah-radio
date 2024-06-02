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
    <div className="relative mx-2 w-full max-w-[1920px] md:mx-8">
      <RadioIllustration className="w-full" />
      <RadioScreen
        className="absolute left-[4%] top-[61%] h-[24%] w-[67%]"
        isPlaying={isPlaying}
      />
      <div className="absolute right-[17%] top-[60%] h-[26%] w-[9%]">
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
