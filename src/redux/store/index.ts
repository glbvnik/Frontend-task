import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import app from "../reducers/app";
import order from "../reducers/order";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app,
    order,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
