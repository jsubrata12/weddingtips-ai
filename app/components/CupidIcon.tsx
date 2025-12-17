interface CupidIconProps {
  className?: string;
}

export default function CupidIcon({ className = "w-8 h-8" }: CupidIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Cupid's head */}
      <circle cx="12" cy="6" r="2.5" />
      
      {/* Cupid's body */}
      <path d="M12 8.5 L12 13" />
      
      {/* Arms holding bow */}
      <path d="M12 10 L9 11" />
      <path d="M12 10 L15 9" />
      
      {/* Legs */}
      <path d="M12 13 L10 16" />
      <path d="M12 13 L14 16" />
      
      {/* Bow */}
      <path d="M8 11 Q7 11 6.5 10.5 Q6 10 6.5 9.5 Q7 9 8 9" />
      
      {/* Arrow */}
      <path d="M15 9 L20 4" />
      <path d="M19 4 L20 4 L20 5" />
      <path d="M15.5 8.5 L16 8" />
      
      {/* Wings */}
      <path d="M11 9 Q9 8 8 9 Q7 10 8 11" />
      <path d="M13 9 Q15 8 16 9 Q17 10 16 11" />
      
      {/* Heart (target) */}
      <path d="M21 6 Q21 5 20.5 4.5 Q20 4 19.5 4 Q19 4 18.5 4.5 L18 5 L17.5 4.5 Q17 4 16.5 4 Q16 4 15.5 4.5 Q15 5 15 6 Q15 7 18 9" 
        fill="currentColor" 
        opacity="0.3"
      />
    </svg>
  );
}
