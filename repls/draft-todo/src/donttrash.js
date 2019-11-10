import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/ToDoListContainer/actions.js';
import { ADD_TODO } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/AddToDo/actions.js';


//A saga that listens to LOAD_TODO_LIST (ACTIONS) to
//trigger the fetchToDoList (saga).
export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}
//triggered by the loadToDoList saga
//issues our GET request
export function* fetchToDoList() {
  const endpoint = 'http://localhost:3000/onmount';
  const response = yield call(fetch, endpoint);
  console.log('i am fetch', fetch)
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}
///////

//triggered by the addToDo (saga)
//A saga to listens for ADD_TODO (ACTIONS)
//will trigger our post request
export function* postToDo() {
  yield takeEvery(ADD_TODO, addTodo);
}

//triggered by the postToDo saga
//issues our POST request
export function* addTodo() {
  const endpoint = 'http://localhost:3000/onmount';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}

