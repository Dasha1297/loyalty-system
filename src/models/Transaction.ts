export interface Transaction {
  uuid: string;
  card_uuid: string;
  delta: number;
  state: string;
  period: string;
  period_activate: string;
  user_uid: string;
  store_uuid: string;
  device_uuid: string;
  receipt_uuid: string;
  comment: string;
}
