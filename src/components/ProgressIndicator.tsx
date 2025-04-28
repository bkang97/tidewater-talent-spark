
import React from 'react';
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  percentage: number;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  percentage, 
  className 
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Profile Completion</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
