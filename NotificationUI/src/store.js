import { applyMiddleware, compose, createStore } from "redux";

import rootReducer from "./reducer";

import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";

export const configureStore = (initialState = {}) => {
   const sagaMiddleware = createSagaMiddleware();
   const devToolEnhancer =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

   const composeEnhancers = devToolEnhancer || compose;
   const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware))
   );
   sagaMiddleware.run(rootSaga);
   return store;
};
