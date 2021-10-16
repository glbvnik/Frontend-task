import { put, select, StrictEffect, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  changeOrder,
  createNewOrder,
  deleteOrder,
  dragOrder,
  makeDoneOrder,
  makeOrderInPreparation,
  OrderActions,
} from "./../../reducers/order/actions";
import { selectApp } from "./../../reducers/app/index";
import {
  OrderState,
  selectOrder,
  setOrders,
} from "./../../reducers/order/index";
import { IOrder, OrderStatus } from "./../../../models/order";
import { OrderService } from "./../../../services/order";
import { OrderListNames } from "./../../../components/List/OrdersList";

function* handleOrderDrag({ payload }: PayloadAction<OrderListNames>) {
  const { draggedOrder } = yield select(selectApp);

  switch (payload) {
    case OrderListNames.NEW:
      yield put(createNewOrder(draggedOrder));
      break;

    case OrderListNames.IN_PREPARATION:
      yield put(makeOrderInPreparation(draggedOrder));
      break;

    case OrderListNames.DONE:
      yield put(makeDoneOrder(draggedOrder));
      break;
  }
}

function* handleOrderChange({
  payload,
}: PayloadAction<Omit<IOrder, "id" | "date">>) {
  const { openedOrder } = yield select(selectApp);

  const changedOrder = {
    ...payload,
    id: openedOrder.id,
    date: openedOrder.date,
  };

  switch (payload.status) {
    case OrderStatus.NEW:
      yield put(createNewOrder(changedOrder));
      break;

    case OrderStatus.IN_PREPARATION:
      yield put(makeOrderInPreparation(changedOrder));
      break;

    case OrderStatus.DONE:
      yield put(makeDoneOrder(changedOrder));
      break;
  }
}

function* handleOrder({
  type,
  payload,
}: PayloadAction<IOrder | Omit<IOrder, "id" | "date">>): Generator<
  StrictEffect,
  void,
  OrderState
> {
  const { orders } = yield select(selectOrder);

  if ("id" in payload && "date" in payload) {
    switch (type) {
      case OrderActions.CREATE_NEW_ORDER:
        yield put(
          setOrders(
            OrderService.setOrderStatus(payload, orders, OrderStatus.NEW)
          )
        );
        break;
      case OrderActions.MAKE_IN_PREPARATION_ORDER:
        yield put(
          setOrders(
            OrderService.setOrderStatus(
              payload,
              orders,
              OrderStatus.IN_PREPARATION
            )
          )
        );
        break;
      case OrderActions.MAKE_DONE_ORDER:
        yield put(
          setOrders(
            OrderService.setOrderStatus(payload, orders, OrderStatus.DONE)
          )
        );
        break;
      case OrderActions.DELETE_ORDER:
        yield put(setOrders(orders.filter((order) => order.id !== payload.id)));
    }
  } else {
    yield put(
      setOrders([
        ...orders,
        {
          ...payload,
          id: new Date().getTime().toString(),
          date: new Date().toLocaleString(),
        },
      ])
    );
  }
}

export default function* orderSaga() {
  yield takeEvery(
    [createNewOrder, makeOrderInPreparation, makeDoneOrder, deleteOrder],
    handleOrder
  );
  yield takeEvery(changeOrder, handleOrderChange);
  yield takeEvery(dragOrder, handleOrderDrag);
}
