import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./saga";

const reducer = reducers();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
