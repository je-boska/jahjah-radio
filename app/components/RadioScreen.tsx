"use client";

import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";

export default function RadioScreen({
  isPlaying,
  className,
}: {
  isPlaying: Boolean | undefined;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative pt-2 xl:pt-4">
        <h2 className="hidden font-serif text-xl md:block md:text-2xl xl:text-3xl">
          Now playing:
        </h2>
        <p className="overflow-hidden text-nowrap font-sans text-xl italic md:text-2xl xl:text-3xl">
          Show title here Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Praesentium veniam asperiores soluta sit facilis ullam nobis
          sed, laudantium similique illo dicta neque recusandae tenetur. Dolor
          excepturi ex aut hic ea earum. Ab quibusdam delectus doloremque id
          voluptatibus! Quas inventore quidem aperiam accusamus laudantium alias
          saepe modi, veritatis natus quibusdam! Enim?
        </p>
        <div className="absolute right-0 top-2 w-6 md:w-10">
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </div>
      </div>
    </div>
  );
}
