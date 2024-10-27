import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Chart } from './components/Chart';
import { PredictionCard } from './components/PredictionCard';
import { ConfigForm } from './components/ConfigForm';
import { useMarketStore } from './store/marketStore';
import { useMarketData } from './hooks/useMarketData';
import { usePrediction } from './hooks/usePrediction';

const queryClient = new QueryClient();

function Dashboard() {
  const [symbol] = useState('AAPL');
  const { data: marketData = [] } = useMarketData(symbol);
  const { data: prediction } = usePrediction(symbol);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Market Chart</h2>
        <Chart data={marketData} />
      </div>
      
      {prediction && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Market Predictions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PredictionCard prediction={prediction} />
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const apiConfig = useMarketStore((state) => state.apiConfig);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Market Analysis Dashboard</h1>
          
          {!apiConfig ? (
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Configuration</h2>
              <ConfigForm />
            </div>
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;