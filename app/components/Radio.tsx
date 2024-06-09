"use client";

import RadioIllustration from "./illustrations/RadioIllustration";
import RadioScreen from "./RadioScreen";
import { useRef } from "react";
import usePlayerState from "../hooks/usePlayerState";
import PlayButtonIllustration from "./illustrations/PlayButtonIllustration";
import cx from "classnames";
import { LiveAPIResponse } from "@/types/shared";

export default function Radio({ liveData }: { liveData: LiveAPIResponse }) {
  const clickAudio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("click.wav") : undefined,
  );

  const player = useRef<HTMLAudioElement>(null);
  const source = useRef<HTMLSourceElement>(null);

  const { play, pause, isPlaying } = usePlayerState({
    audioRef: player,
    sourceRef: source,
    url: "https://jah-jah-radio.radiocult.fm/stream",
  });

  function handleClick() {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    clickAudio?.current?.play();
  }

  const title =
    liveData.success && liveData.result.status === "schedule"
      ? liveData.result.content.title
      : liveData.success && liveData.result.status === "defaultPlaylist"
        ? liveData.result.content.name
        : liveData.success && liveData.result.status === "offAir"
          ? liveData.result.content
          : undefined;

  return (
    <div className="relative mx-2 w-full max-w-[1920px] md:mx-8">
      <RadioIllustration className="w-full" />
      <RadioScreen
        className="absolute left-[4%] top-[61%] h-[24%] w-[67%]"
        title={title}
        isPlaying={isPlaying}
      />
      <div
        className={cx("absolute  h-[26%] w-[9%]", {
          "right-[17%] top-[60%]": !isPlaying,
          "right-[16.5%] top-[59%]": isPlaying,
        })}
      >
        <audio ref={player}>
          <source ref={source} />
          Your browser does not support the audio element.
        </audio>
        <button className="h-full w-full" onClick={handleClick}>
          <PlayButtonIllustration
            className="h-full w-full"
            isPlaying={isPlaying}
          />
        </button>
      </div>
    </div>
  );
}
