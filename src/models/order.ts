export enum OrderStatus {
  NEW = "Nová",
  IN_PREPARATION = "Připravováno",
  DONE = "Hotovo",
}

export interface IOrder {
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
  date: string;
  status: OrderStatus;
}
