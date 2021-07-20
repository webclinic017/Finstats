import { createStore, applyMiddleware,compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './app/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store;
composeWithDevTools({trace: true, traceLimit: 20})