import { createStore, compose, applyMiddleware } from "redux";
import {rootReducer} from "./reducers/rootReducer";

import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas/rootSaga";





const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default store;

sagaMiddleware.run(rootSaga);