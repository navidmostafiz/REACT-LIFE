//import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
console.log('STORE: master store')
// const accessToken = (store) => (next) => (action) => {
//   axios.defaults.headers.common['x-access-token'] = store.getState().auth.token ?
//     store.getState().auth.token : null;
//   return next(action);
// };

const store = createStore(
    reducers,
    //applyMiddleware(thunk, accessToken, logger())
    applyMiddleware(thunk, logger())
);

export default store;
