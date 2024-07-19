export interface GetComment {
  id: number;
  createdAt: string;
  updatedAt: string;
  cleanRating: number;
  locationRating: number;
  serviceRating: number;
  confortableRating: number;
  priceBalance: number;
  overallRating: number;
  content: string;
  userId: number;
}
