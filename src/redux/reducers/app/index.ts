import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../store/index";
import { IOrder } from "./../../../models/order";

export interface AppState {
  isModal: boolean;
  openedOrder: IOrder;
  draggedOrder: IOrder;
}

const initialState: AppState = {
  isModal: false,
  openedOrder: {} as IOrder,
  draggedOrder: {} as IOrder,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsModal: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      isModal: payload,
    }),
    setOpenedOrder: (state, { payload }: PayloadAction<IOrder>) => ({
      ...state,
      openedOrder: payload,
      isModal: true,
    }),
    setDraggedOrder: (state, { payload }: PayloadAction<IOrder>) => ({
      ...state,
      draggedOrder: payload,
    }),
  },
});

export const { setIsModal, setOpenedOrder, setDraggedOrder } = appSlice.actions;

export const selectApp = ({ app }: RootState) => app;

export default appSlice.reducer;
