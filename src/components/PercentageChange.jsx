import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { formatPercentage } from '../utils/Formatter';

const PercentageChange = ({ value }) => {
  const isPositive = value > 0;
  const color = isPositive ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500";
  
  return (
    <div className={`flex items-center justify-end ${color}`}>
      {isPositive ? (
        <ArrowUp size={14} className="mr-1" />
      ) : value < 0 ? (
        <ArrowDown size={14} className="mr-1" />
      ) : null}
      {formatPercentage(value)}
    </div>
  );
};

export default PercentageChange;
