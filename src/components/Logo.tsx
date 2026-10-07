import React from 'react';

interface LogoProps {
  variant?: 'header' | 'full' | 'mark' | 'footer';
  theme?: 'light' | 'dark';
  className?: string;
  descriptorLang?: 'ca' | 'es';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  theme = 'light',
  className = '',
  descriptorLang = 'ca',
}) => {
  const isDarkTheme = theme === 'dark';
  const mainColor = isDarkTheme ? '#FFFFFF' : '#1C1917';
  const beadColor = '#C47D59'; // Signature terracotta sealant bead
  const subtitleColor = isDarkTheme ? '#D6D3D1' : '#292524';

  const subtitleText =
    descriptorLang === 'ca'
      ? 'ESPECIALISTES EN JUNTES I SEGELLATS'
      : 'ESPECIALISTAS EN JUNTAS Y SELLADOS';

  // 1. Mark Only Variant (J A M glyphs + Caulking Gun, without subtitle)
  if (variant === 'mark') {
    return (
      <svg
        viewBox="100 0 310 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto shrink-0 select-none ${className}`}
        aria-hidden="true"
      >
        {/* Letters: J, A, M */}
        <g stroke={mainColor} strokeWidth="5" strokeLinecap="butt" strokeLinejoin="miter" fill="none">
          {/* J */}
          <path d="M 172 46 L 172 110 C 172 131 157 146 140 146 C 123 146 110 133 110 119 L 110 114" />
          {/* A */}
          <path d="M 186 146 L 232 46 L 278 146" />
          {/* M */}
          <path d="M 292 146 L 292 46 L 336 112 L 380 46 L 380 146" />
        </g>

        {/* Terracotta Sealant Bead in Center of M */}
        <line x1="336" y1="146" x2="336" y2="58" stroke={beadColor} strokeWidth="5.4" strokeLinecap="butt" />

        {/* Caulking Gun at (336, 58) angled at -40° */}
        <g transform="translate(336, 58) rotate(-40)" fill={mainColor} stroke={mainColor}>
          {/* Nozzle (Cone) */}
          <polygon points="0,-1.2 13,-3 13,3 0,1.2" stroke="none" />
          {/* Front Collar */}
          <polygon points="13,-5.2 15.5,-5.2 15.5,5.2 13,5.2" stroke="none" />
          {/* Cartridge Cylinder Body */}
          <rect x="15.5" y="-4.5" width="35" height="9" rx="0.5" stroke="none" />
          {/* Skeleton Cradle Lower Rail */}
          <line x1="15.5" y1="6" x2="50.5" y2="6" strokeWidth="1.4" strokeLinecap="round" />
          {/* Rear Breech Collar */}
          <polygon points="50.5,-6.2 53.5,-6.2 53.5,6.2 50.5,6.2" stroke="none" />
          {/* Mechanism Body Housing */}
          <path d="M 53.5,-6.2 L 63,-6.2 L 63,3 L 53.5,3 Z" stroke="none" />
          {/* Pistol Grip Handle */}
          <path d="M 57.5,3 L 62,23 L 68,23 L 63.5,3 Z" stroke="none" strokeLinejoin="round" />
          <path d="M 61,23.5 Q 65,25 68.5,23.5" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Trigger Lever */}
          <path d="M 55,4 C 55,8 56.5,12 55.5,14" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          {/* Plunger Push Rod */}
          <line x1="53.5" y1="-0.5" x2="81" y2="-0.5" strokeWidth="2.2" strokeLinecap="square" fill="none" />
          {/* Rear Pull Hook */}
          <path d="M 81,-0.5 L 81,9 C 81,10.5 79.5,11.5 77.5,10.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </svg>
    );
  }

  // 2. Header Variant (Optimized for navbar and navigation bar heights)
  if (variant === 'header') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <svg
          viewBox="0 0 520 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto max-w-[210px] sm:max-w-[250px] shrink-0"
          aria-label="SELLATS JAM - Especialistes en juntes i segellats"
        >
          {/* Letters: J, A, M */}
          <g stroke={mainColor} strokeWidth="5" strokeLinecap="butt" strokeLinejoin="miter" fill="none">
            {/* J */}
            <path d="M 172 46 L 172 110 C 172 131 157 146 140 146 C 123 146 110 133 110 119 L 110 114" />
            {/* A */}
            <path d="M 186 146 L 232 46 L 278 146" />
            {/* M */}
            <path d="M 292 146 L 292 46 L 336 112 L 380 46 L 380 146" />
          </g>

          {/* Terracotta Sealant Bead in Center of M */}
          <line x1="336" y1="146" x2="336" y2="58" stroke={beadColor} strokeWidth="5.4" strokeLinecap="butt" />

          {/* Caulking Gun at (336, 58) angled at -40° */}
          <g transform="translate(336, 58) rotate(-40)" fill={mainColor} stroke={mainColor}>
            {/* Nozzle (Cone) */}
            <polygon points="0,-1.2 13,-3 13,3 0,1.2" stroke="none" />
            {/* Front Collar */}
            <polygon points="13,-5.2 15.5,-5.2 15.5,5.2 13,5.2" stroke="none" />
            {/* Cartridge Cylinder Body */}
            <rect x="15.5" y="-4.5" width="35" height="9" rx="0.5" stroke="none" />
            {/* Skeleton Cradle Lower Rail */}
            <line x1="15.5" y1="6" x2="50.5" y2="6" strokeWidth="1.4" strokeLinecap="round" />
            {/* Rear Breech Collar */}
            <polygon points="50.5,-6.2 53.5,-6.2 53.5,6.2 50.5,6.2" stroke="none" />
            {/* Mechanism Body Housing */}
            <path d="M 53.5,-6.2 L 63,-6.2 L 63,3 L 53.5,3 Z" stroke="none" />
            {/* Pistol Grip Handle */}
            <path d="M 57.5,3 L 62,23 L 68,23 L 63.5,3 Z" stroke="none" strokeLinejoin="round" />
            <path d="M 61,23.5 Q 65,25 68.5,23.5" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Trigger Lever */}
            <path d="M 55,4 C 55,8 56.5,12 55.5,14" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            {/* Plunger Push Rod */}
            <line x1="53.5" y1="-0.5" x2="81" y2="-0.5" strokeWidth="2.2" strokeLinecap="square" fill="none" />
            {/* Rear Pull Hook */}
            <path d="M 81,-0.5 L 81,9 C 81,10.5 79.5,11.5 77.5,10.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>

          {/* Subtitle: ESPECIALISTES EN JUNTES I SEGELLATS */}
          <text
            x="260"
            y="188"
            textAnchor="middle"
            fill={subtitleColor}
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="14.5"
            fontWeight="600"
            letterSpacing="4.8"
          >
            {subtitleText}
          </text>
        </svg>
      </div>
    );
  }

  // 3. Full Brand Lockup (Ideal for Hero, About Section, Footer, or Modals)
  return (
    <div className={`flex flex-col select-none ${className}`}>
      <svg
        viewBox="0 0 520 215"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="SELLATS JAM - Especialistes en juntes i segellats"
      >
        {/* Letters: J, A, M */}
        <g stroke={mainColor} strokeWidth="5" strokeLinecap="butt" strokeLinejoin="miter" fill="none">
          {/* J */}
          <path d="M 172 46 L 172 110 C 172 131 157 146 140 146 C 123 146 110 133 110 119 L 110 114" />
          {/* A */}
          <path d="M 186 146 L 232 46 L 278 146" />
          {/* M */}
          <path d="M 292 146 L 292 46 L 336 112 L 380 46 L 380 146" />
        </g>

        {/* Terracotta Sealant Bead in Center of M */}
        <line x1="336" y1="146" x2="336" y2="58" stroke={beadColor} strokeWidth="5.4" strokeLinecap="butt" />

        {/* Caulking Gun at (336, 58) angled at -40° */}
        <g transform="translate(336, 58) rotate(-40)" fill={mainColor} stroke={mainColor}>
          {/* Nozzle (Cone) */}
          <polygon points="0,-1.2 13,-3 13,3 0,1.2" stroke="none" />
          {/* Front Collar */}
          <polygon points="13,-5.2 15.5,-5.2 15.5,5.2 13,5.2" stroke="none" />
          {/* Cartridge Cylinder Body */}
          <rect x="15.5" y="-4.5" width="35" height="9" rx="0.5" stroke="none" />
          {/* Skeleton Cradle Lower Rail */}
          <line x1="15.5" y1="6" x2="50.5" y2="6" strokeWidth="1.4" strokeLinecap="round" />
          {/* Rear Breech Collar */}
          <polygon points="50.5,-6.2 53.5,-6.2 53.5,6.2 50.5,6.2" stroke="none" />
          {/* Mechanism Body Housing */}
          <path d="M 53.5,-6.2 L 63,-6.2 L 63,3 L 53.5,3 Z" stroke="none" />
          {/* Pistol Grip Handle */}
          <path d="M 57.5,3 L 62,23 L 68,23 L 63.5,3 Z" stroke="none" strokeLinejoin="round" />
          <path d="M 61,23.5 Q 65,25 68.5,23.5" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Trigger Lever */}
          <path d="M 55,4 C 55,8 56.5,12 55.5,14" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          {/* Plunger Push Rod */}
          <line x1="53.5" y1="-0.5" x2="81" y2="-0.5" strokeWidth="2.2" strokeLinecap="square" fill="none" />
          {/* Rear Pull Hook */}
          <path d="M 81,-0.5 L 81,9 C 81,10.5 79.5,11.5 77.5,10.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Subtitle: ESPECIALISTES EN JUNTES I SEGELLATS */}
        <text
          x="260"
          y="188"
          textAnchor="middle"
          fill={subtitleColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontSize="14.5"
          fontWeight="600"
          letterSpacing="4.8"
        >
          {subtitleText}
        </text>
      </svg>
    </div>
  );
};
