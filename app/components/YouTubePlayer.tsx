"use client";

import { shouldUnloadLivePlayerState } from "../hooks/usePlayerState";

export default function YouTubePlayer() {
  const [shouldUnloadLivePlayer, setShouldUnloadLivePlayer] =
    shouldUnloadLivePlayerState.use();

  return (
    <div className="w-full px-4 md:px-20 xl:px-40">
      <iframe
        onClick={() => {
          if (!shouldUnloadLivePlayer) {
            setShouldUnloadLivePlayer(true);
          }
        }}
        className="aspect-video h-full w-full"
        src="https://www.youtube.com/embed/fkh9PnwA9DA?si=wx1UNod7FJEEocYh"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
