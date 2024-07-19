export interface PaymentModel {
  request: {
    locale: Locale;
    currency: Currency;
  };
  paymentCard: {
    cardHolderName: string;
    cardNumber: string;
    expireYear: string;
    expireMonth: string;
    cvc: string;
    registerCard: number;
  };
  userId: number;
  hotelId: number;
  identityNumber: string;
  phoneNumber: string;
  ip: string;
}

enum Currency {
  'TRY',
  'USD',
}

enum Locale {
  'tr',
  'eng',
}
