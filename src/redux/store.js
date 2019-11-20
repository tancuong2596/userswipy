import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {NativeModules} from "react-native";
import {persistStore} from "redux-persist";

import rootReducer from "src/redux/rootReducers";

const getMiddleWares = () => {
	let middleWares = [
		thunk
	];

	if (__DEV__) {
		middleWares.push(logger);
	}

	return middleWares;
};

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...getMiddleWares())
	)
);

export default store;
