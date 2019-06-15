import { createStore } from 'redux';
import rootReducer from '/Users/ryanbrennan/Desktop/repls/reduxtodo/todoredux/src/reducers/index.js'


let store

// const rootReducer = () => {

// }
export default store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())