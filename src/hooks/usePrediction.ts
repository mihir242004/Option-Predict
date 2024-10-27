import { useQuery } from 'react-query';
import { useMarketStore } from '../store/marketStore';
import createApiClient from '../api/market';

export const usePrediction = (symbol: string) => {
  const apiConfig = useMarketStore((state) => state.apiConfig);
  const api = apiConfig ? createApiClient(apiConfig) : null;

  return useQuery(
    ['prediction', symbol],
    () => api?.getPrediction(symbol) ?? Promise.resolve(null),
    {
      enabled: !!api,
      staleTime: 300000,
    }
  );
};