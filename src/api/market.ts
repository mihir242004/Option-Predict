import axios from 'axios';
import { MarketData, PredictionData, ApiConfig } from '../types/market';

const createApiClient = (config: ApiConfig) => {
  const client = axios.create({
    baseURL: config.baseUrl,
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  return {
    getMarketData: async (symbol: string): Promise<MarketData[]> => {
      try {
        const response = await client.get(`/market/${symbol}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching market data:', error);
        return [];
      }
    },

    getPrediction: async (symbol: string): Promise<PredictionData | null> => {
      try {
        const response = await client.get(`/prediction/${symbol}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching prediction:', error);
        return null;
      }
    }
  };
};

export default createApiClient;