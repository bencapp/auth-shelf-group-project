import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

//WATCHER SAGA
function* postItem() {
  yield takeLatest("POST_ITEM", addItem);
}

//WORKER SAGA
function* addItem(action) {
  try {
    yield axios.post("/api/shelf", action.payload);
    // yield put({
    //   type: "FETCH_ITEMS",
    // });
  } catch (error) {
    console.log(`error in addItem`, error);
  }
}

export default postItem;
