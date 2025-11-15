export interface Card {
  id: number;
  name: string;
  image: string;
  wishCount: number;
  price: number;
  groupName: string;
  memberName: string;
  discountedPrice: number;
  discountRate: number;
  bestPick: boolean;
}
