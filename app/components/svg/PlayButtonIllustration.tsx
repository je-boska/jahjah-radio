export default function PlayButtonIllustration({
  isPlaying,
  className,
}: {
  isPlaying: Boolean | undefined;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 141 151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {!isPlaying && (
        <path
          d="M21.4834 10.5938C22.4828 9.97493 23.751 9.9485 24.7467 10.5258L130.214 71.679C132.115 72.7814 132.12 75.4271 130.222 76.6256L131.871 79.0573L130.222 76.6256L120.051 83.0518C119.05 83.6837 117.773 83.7174 116.769 83.1385L10.9215 22.0937C9.00432 20.988 9.00946 18.3183 10.9311 17.1283L21.4834 10.5938Z"
          fill="black"
          stroke="black"
          strokeWidth="6"
        />
      )}
      <path
        d="M119.138 77.2473C121.168 78.3961 121.168 81.3203 119.138 82.469L14.647 141.605C12.6471 142.737 10.1694 141.293 10.1694 138.995L10.1694 20.7217C10.1694 18.4238 12.6471 16.979 14.647 18.1109L119.138 77.2473Z"
        fill="white"
        stroke="black"
        strokeWidth="8"
      />
    </svg>
  );
}
