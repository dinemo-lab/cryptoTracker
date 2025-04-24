import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const MiniChart = ({ data }) => {
  const chartData = data.chartData;
  const isPositive = chartData[chartData.length - 1].price >= chartData[0].price;
  
  return (
    <div className="w-32 h-12">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke={isPositive ? "#16a34a" : "#dc2626"} 
            strokeWidth={1.5} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;