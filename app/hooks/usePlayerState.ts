import { MutableRefObject, useCallback, useEffect } from "react";
import { newRidgeState } from "react-ridge-state";

export const livePlayerState = newRidgeState<Boolean | undefined>(undefined);
export const shouldUnloadLivePlayerState = newRidgeState(false);

export default function usePlayerState({
  audioRef,
  sourceRef,
  url,
}: {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  sourceRef: MutableRefObject<HTMLSourceElement | null>;
  url: string;
}) {
  const [isPlaying, setIsPlaying] = livePlayerState.use();
  const [shouldUnloadLivePlayer, shouldUnloadLivePlayerSet] =
    shouldUnloadLivePlayerState.use();

  useEffect(() => {
    const setStatePlaying = () => setIsPlaying(true);
    const setStatePaused = () => setIsPlaying(false);

    const currentAudioRef = audioRef?.current;

    currentAudioRef?.addEventListener("play", setStatePlaying);
    currentAudioRef?.addEventListener("pause", setStatePaused);

    return () => {
      currentAudioRef?.removeEventListener("play", setStatePlaying);
      currentAudioRef?.removeEventListener("pause", setStatePaused);
    };
  }, [audioRef, setIsPlaying]);

  const play = useCallback(async () => {
    try {
      setIsPlaying(true);

      shouldUnloadLivePlayerSet(false);

      if (!sourceRef?.current?.getAttribute("src")) {
        sourceRef?.current?.setAttribute("src", url);
        audioRef?.current?.load();
      }

      await audioRef?.current?.play();
    } catch (error) {
      setIsPlaying(false);

      console.error(error);
    }
  }, [audioRef, setIsPlaying, shouldUnloadLivePlayerSet, sourceRef, url]);

  const pause = useCallback(async () => {
    try {
      setIsPlaying(false);

      sourceRef?.current?.setAttribute("src", "");
      audioRef?.current?.pause();
    } catch (error) {
      setIsPlaying(false);

      console.error(error);
    }
  }, [audioRef, setIsPlaying, sourceRef]);

  useEffect(() => {
    if (shouldUnloadLivePlayer) {
      pause();
    }
  }, [shouldUnloadLivePlayer, pause]);

  return {
    isPlaying,
    play,
    pause,
  };
}
