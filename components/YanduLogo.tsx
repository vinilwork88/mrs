import React from 'react';

interface LogoProps {
    className?: string;
    onClick?: () => void;
}

const YanduLogo: React.FC<LogoProps> = ({ className = "h-20", onClick }) => {
    return (
        <svg
            viewBox="28 0 166 74"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-auto hover:scale-105 transition-transform duration-300 text-white ${className}`}
            onClick={onClick}
        >
            {/* Swoosh */}
            <path d="M 30,55 C 60,75 110,75 138,58" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

            {/* Hand-Drawn 'yandu' Text */}
            <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-3, 85, 45)">
                <path d="M 44,38 L 48,48 M 56,38 L 48,56 Q 45,61 39,59" />
                <path d="M 72,48 C 72,56 62,56 62,48 C 62,40 72,40 72,48 L 72,54" />
                <path d="M 82,54 L 82,40 M 82,46 C 82,37 94,37 94,46 L 94,54" />
                <path d="M 110,48 C 110,56 100,56 100,48 C 100,40 110,40 110,48 L 110,26 M 110,40 L 110,54" />
                <path d="M 118,40 L 118,48 C 118,56 130,56 130,48 L 130,40 M 130,40 L 130,54" />
            </g>

            {/* Orange comma / spark */}
            <path d="M 136,56 C 142,54 146,60 138,62 Z" fill="#FF9900" />
            <circle cx="150" cy="46" r="4.5" fill="none" stroke="#FF9900" strokeWidth="3" />

            {/* Rocket Trajectory (Growth) */}
            <path d="M 150,38 C 158,28 168,20 176,14" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />

            {/* Hand-Drawn Rocket */}
            <g transform="translate(180, 10) rotate(45)">
                <path d="M -3,8 C -5,16 0,22 0,22 C 0,22 5,16 3,8 Z" fill="#FF9900" />
                <path d="M 0,-12 C -6,0 -5,8 -2,8 L 2,8 C 5,8 6,0 0,-12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M -3,3 L -8,10 L -2,8 M 3,3 L 8,10 L 2,8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="0" cy="-2" r="1.5" fill="currentColor" />
            </g>
        </svg>
    );
};

export default YanduLogo;