import { IOrder, OrderStatus } from "./../models/order";

interface IErrors {
  name: boolean;
  description: boolean;
  city: boolean;
  address: boolean;
  status: boolean;
}

export class OrderService {
  static setOrderStatus(order: IOrder, orders: IOrder[], status: OrderStatus) {
    return orders.map((o) => {
      if (o.id === order.id) {
        return { ...order, status };
      }
      return o;
    });
  }
  static getValidationErrors(inputs: Omit<IOrder, "id" | "date">) {
    const errors = {
      name: false,
      description: false,
      city: false,
      address: false,
      status: false,
    };

    for (const key in inputs) {
      if (inputs[key as keyof Omit<IOrder, "id" | "date">] === "") {
        errors[key as keyof IErrors] = true;
      }
    }

    return errors;
  }
}
