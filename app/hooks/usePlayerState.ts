import { MutableRefObject, useCallback, useEffect } from "react";
import { newRidgeState } from "react-ridge-state";

/* 
This global state implementation allows for the synchronization of a separate widget 
or player for archived shows, i.e. Mixcloud or similar. Use the shouldUnloadLivePlayerState
to stop playback from the live player when the third party widget starts playing.
*/

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
  const [shouldUnloadLivePlayer, setShouldUnloadLivePlayer] =
    shouldUnloadLivePlayerState.use();

  useEffect(() => {
    const currentAudioRef = audioRef?.current;

    currentAudioRef?.addEventListener("play", () => setIsPlaying(true));
    currentAudioRef?.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      currentAudioRef?.removeEventListener("play", () => setIsPlaying(true));
      currentAudioRef?.removeEventListener("pause", () => setIsPlaying(false));
    };
  }, [audioRef, setIsPlaying]);

  const play = useCallback(async () => {
    try {
      setIsPlaying(true);

      setShouldUnloadLivePlayer(false);

      if (!sourceRef?.current?.getAttribute("src")) {
        sourceRef?.current?.setAttribute("src", url);
        audioRef?.current?.load();
      }

      await audioRef?.current?.play();
    } catch (error) {
      setIsPlaying(false);

      console.error(error);
    }
  }, [audioRef, setIsPlaying, setShouldUnloadLivePlayer, sourceRef, url]);

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
