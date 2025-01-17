export enum AuctionType {
  BID,
  FIXED,
  BOTH
}

export enum BidType {
  BID,
  BUY_NOW,
  OFFER
}

export enum AuctionState {
  BIDDING,
  NO_BID_CANCELLED,
  SELECTION,
  VERIFICATION,
  CANCELLED,
  COMPLETED,
}

export enum BidState {
  BIDDING,
  PENDING_SELECTION,
  SELECTED,
  REFUNDED,
  CANCELLED,
  DEAL_SUCCESSFUL_PAID,
  DEAL_UNSUCCESSFUL_REFUNDED,
}