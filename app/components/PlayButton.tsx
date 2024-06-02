import PlayButtonIllustration from "./illustrations/PlayButtonIllustration";

export default function PlayButton({ className }: { className?: string }) {
  return (
    <button className={className}>
      <PlayButtonIllustration className="h-full w-full" />
    </button>
  );
}
