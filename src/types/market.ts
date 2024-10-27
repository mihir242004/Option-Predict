export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  volume: number;
  timestamp: string;
}

export interface PredictionData {
  symbol: string;
  support: number;
  resistance: number;
  trend: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
}

export interface ApiConfig {
  apiKey: string;
  baseUrl: string;
}