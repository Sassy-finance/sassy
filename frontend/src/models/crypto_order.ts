export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  user: string;
  status: CryptoOrderStatus;
  cid: string;
  ClaimOffers: any[];
}
