export function DecorativePattern() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="southIndianPattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="2" fill="#D4AF37" opacity="0.3" />
          <circle cx="0" cy="0" r="1" fill="#D4AF37" opacity="0.2" />
          <circle cx="20" cy="20" r="1" fill="#D4AF37" opacity="0.2" />
          <circle cx="0" cy="20" r="1" fill="#D4AF37" opacity="0.2" />
          <circle cx="20" cy="0" r="1" fill="#D4AF37" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#southIndianPattern)" />
    </svg>
  );
}
