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
    yield axios.post("/api/shelf", action.payload);
    yield put({ type: "FETCH_SHELF" });
  } catch (error) {
    console.log("User post request failed", error);
  }
}

function* deleteShelf(action) {
  try {
    console.log("action.payload", action.payload);
    yield axios.delete(`/api/shelf/${action.payload}`);
    yield put({ type: "FETCH_SHELF" });
  } catch (error) {
    console.log("User delete request failed", error);
  }
}

function* editShelf(action) {
  try {
    console.log("in edit shelf, action is,", action);
    yield axios.put(`/api/shelf/${action.payload.id}`, {
      payload: action.payload.description,
    });
    yield put({ type: "FETCH_SHELF" });
  } catch (error) {
    console.log("User PUT request failed", error);
  }
}

function* shelfSaga() {
  yield takeEvery("FETCH_SHELF", fetchShelf);
  yield takeEvery("POST_SHELF", postShelf);
  yield takeEvery("DELETE_FROM_SHELF", deleteShelf);
  yield takeEvery("EDIT_SHELF", editShelf);
}

export default shelfSaga;
