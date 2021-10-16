import { all, call, spawn } from "redux-saga/effects";
import orderSaga from "./order";

export default function* rootSaga() {
  const sagas = [orderSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
