export interface PaymentResponse {
  status: string;
  errorCode: string | null;
  errorMessage: string | null;
  errorGroup: string | null;
}
