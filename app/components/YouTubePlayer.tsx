export default function YouTubePlayer() {
  return (
    <div className="w-full px-4 md:px-20 xl:px-40">
      <iframe
        className="aspect-video h-full w-full"
        src="https://www.youtube.com/embed/6y60GgNqFg0?si=wJSZ2VVhSdA7fM8k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
