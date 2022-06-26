export interface Receipt {
  uuid: string;
  user_uid: string;
  card_uuid: string;
  type: string;
  number: number;
  period: number;
  total: number;
  totalWithDiscount: number;
  bonus: number;
  payment: number;
}
