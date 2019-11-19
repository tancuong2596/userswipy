import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";

import rootReducer from "src/redux/rootReducers";

const store = createStore(rootReducer);

export {
	store as default
};
