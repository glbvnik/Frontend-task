import { createAction } from "@reduxjs/toolkit";
import { IOrder } from "./../../../models/order";
import { OrderListNames } from "./../../../components/List/OrdersList";

export enum OrderActions {
  CREATE_NEW_ORDER = "CREATE_NEW_ORDER",
  MAKE_IN_PREPARATION_ORDER = "MAKE_IN_PREPARATION_ORDER",
  MAKE_DONE_ORDER = "MAKE_DONE_ORDER",
  DELETE_ORDER = "DELETE_ORDER",
  CHANGE_ORDER = "CHANGE_ORDER",
  DRAG_ORDER = "DRAG_ORDER",
}

export const createNewOrder = createAction<
  IOrder | Omit<IOrder, "id" | "date">
>(OrderActions.CREATE_NEW_ORDER);

export const makeOrderInPreparation = createAction<IOrder>(
  OrderActions.MAKE_IN_PREPARATION_ORDER
);

export const makeDoneOrder = createAction<IOrder>(OrderActions.MAKE_DONE_ORDER);

export const deleteOrder = createAction<IOrder>(OrderActions.DELETE_ORDER);

export const changeOrder = createAction<Omit<IOrder, "id" | "date">>(
  OrderActions.CHANGE_ORDER
);

export const dragOrder = createAction<OrderListNames>(OrderActions.DRAG_ORDER);
