export default function PlayIcon({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  return (
    <>
      {transparent ? (
        <svg
          id="Play_Button_Transparent"
          data-name="Play Button Transparent"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 114 114"
        >
          <g
            id="Ellipse_24"
            data-name="Ellipse 24"
            fill="rgba(0,0,0,0.2)"
            stroke="#fff"
            strokeWidth="2"
          >
            <circle cx="57" cy="57" r="57" stroke="none" />
            <circle cx="57" cy="57" r="56" fill="none" />
          </g>
          <g
            id="Pfad_65"
            data-name="Pfad 65"
            transform="translate(93.107 28) rotate(90)"
            fill="none"
          >
            <path d="M29.182,0,58.363,56.595H0Z" stroke="none" />
            <path
              d="M 29.18161964416504 4.364063262939453 L 3.281467437744141 54.59469985961914 L 55.08180618286133 54.59469985961914 L 29.18161964416504 4.364063262939453 M 29.18161964416504 -3.814697265625e-06 L 58.36327743530273 56.59469985961914 L 0 56.59469985961914 L 29.18161964416504 -3.814697265625e-06 Z"
              stroke="none"
              fill="#fff"
            />
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -2 40 40">
          <path d="M35 17.5L0 35V0z" fill="currentColor" />
        </svg>
      )}
    </>
  );
}
