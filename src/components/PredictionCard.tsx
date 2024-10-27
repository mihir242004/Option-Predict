import React from 'react';
import { Card, Text, Metric, Flex, ProgressBar } from '@tremor/react';
import { PredictionData } from '../types/market';

interface PredictionCardProps {
  prediction: PredictionData;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  return (
    <Card className="max-w-xs mx-auto">
      <Text>{prediction.symbol}</Text>
      <Metric>{prediction.trend.toUpperCase()}</Metric>
      <Flex className="mt-4">
        <Text>Confidence</Text>
        <Text>{prediction.confidence}%</Text>
      </Flex>
      <ProgressBar value={prediction.confidence} className="mt-2" />
      <div className="mt-4">
        <Text>Support: ${prediction.support}</Text>
        <Text>Resistance: ${prediction.resistance}</Text>
      </div>
    </Card>
  );
};