import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// worker saga for FETCH SHELF

function* fetchShelf() {
  try {
    console.log("in fetchShelf");
    const response = yield axios.get("/api/shelf");
    yield put({ type: "SET_SHELF", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* postShelf(action) {
  try {
    yield axios.post("/api/shelf", { payload: action.payload });
    yield put({ type: "SET_SHELF" });
  } catch (error) {
    console.log("User post request failed", error);
  }
}

function* deleteShelf(action) {
  try {
    yield axios.delete(`/api/shelf${action.payload.id}`);
    yield put({ type: "SET_SHELF" });
  } catch (error) {
    console.log("User delete request failed", error);
  }
}

function* shelfSaga() {
  yield takeEvery("FETCH_SHELF", fetchShelf);
  yield takeEvery("POST_SHELF", postShelf);
  yield takeEvery("DELETE_FROM_SHELF", deleteShelf);
}

export default shelfSaga;
