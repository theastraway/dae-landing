import Image from "next/image";

type MindLogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
};

export function MindLogo({ className = "", height = 28, priority = false }: MindLogoProps) {
  const width = Math.round(height * (3629 / 968));

  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ height, width }}
      aria-label="MIND"
    >
      <Image
        src="/brand/mind-logo-white.png"
        alt=""
        width={width}
        height={height}
        priority={priority}
        className="logo-white absolute inset-0 h-full w-full object-contain object-left"
      />
      <Image
        src="/brand/mind-logo-dark.png"
        alt=""
        width={width}
        height={height}
        priority={priority}
        className="logo-dark absolute inset-0 h-full w-full object-contain object-left"
      />
    </span>
  );
}
