import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MarketData } from '../types/market';

interface ChartProps {
  data: MarketData[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-lg">
      <LineChart width={800} height={360} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="volume" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};