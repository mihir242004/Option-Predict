import { create } from 'zustand';
import { ApiConfig } from '../types/market';
import { config } from '../config/env';

interface MarketStore {
  apiConfig: ApiConfig | null;
  setApiConfig: (config: ApiConfig) => void;
  clearApiConfig: () => void;
}

export const useMarketStore = create<MarketStore>((set) => ({
  apiConfig: config.apiKey && config.baseUrl ? {
    apiKey: config.apiKey,
    baseUrl: config.baseUrl
  } : null,
  setApiConfig: (config) => set({ apiConfig: config }),
  clearApiConfig: () => set({ apiConfig: null }),
}));