interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="text-foreground"
        fill="currentColor"
      >
        {/* L */}
        <path
          d="M20 20 L20 70 L45 70 L45 60 L30 60 L30 20 Z"
          className="fill-current"
        />
        
        {/* R */}
        <path
          d="M55 20 L55 70 L65 70 L65 50 L75 50 L85 70 L95 70 L82 47 
             C 85 44 87 40 87 35 
             C 87 28 82 20 75 20 Z
             M 65 30 L65 40 L75 40 
             C 78 40 80 38 80 35 
             C 80 32 78 30 75 30 Z"
          className="fill-current"
        />
        
        {/* Accent dot */}
        <circle
          cx="47"
          cy="45"
          r="3"
          className="fill-primary"
        />
      </svg>
    </div>
  );
}