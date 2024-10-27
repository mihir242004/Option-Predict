import { useQuery } from 'react-query';
import { useMarketStore } from '../store/marketStore';
import createApiClient from '../api/market';

export const useMarketData = (symbol: string) => {
  const apiConfig = useMarketStore((state) => state.apiConfig);
  const api = apiConfig ? createApiClient(apiConfig) : null;

  return useQuery(
    ['marketData', symbol],
    () => api?.getMarketData(symbol) ?? Promise.resolve([]),
    {
      enabled: !!api,
      staleTime: 30000,
      refetchInterval: 60000,
    }
  );
};