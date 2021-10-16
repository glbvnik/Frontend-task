import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "./../../../models/order";
import { RootState } from "./../../store/index";

export interface OrderState {
  orders: IOrder[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, { payload }: PayloadAction<IOrder[]>) => ({
      ...state,
      orders: payload,
    }),
  },
});

export const { setOrders } = orderSlice.actions;

export const selectOrder = ({ order }: RootState) => order;

export default orderSlice.reducer;
