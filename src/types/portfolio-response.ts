export interface PortfolioResponse {
    bottom_up: PortfolioItem[];
    smallest_diff: PortfolioItem[];
  }

export interface PortfolioItem {
    amount: number;
    cost: number;
    holdings: number;
    price: number;
    ratio: number;
    target_ratio: number;
    ticker: string;
}
