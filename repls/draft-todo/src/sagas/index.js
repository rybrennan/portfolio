import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST, ADD_TODO } from '../actions';

//this is our initial GET reqiuest like ComponentDidMOunt
export function* fetchToDoList() {
  const url = 'http://localhost:3001/onmount';
  const response = yield call(fetch, url);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}
//this is LISTENING to LOAD_TODO_LIST actions
export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}