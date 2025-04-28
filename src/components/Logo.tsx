
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <h1 className="font-heading font-bold text-tidewater-500">
        <span className="text-white">Tidewater</span> Talent Bridge
      </h1>
    </div>
  );
};

export default Logo;
