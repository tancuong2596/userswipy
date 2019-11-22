import {applyMiddleware, compose, createStore} from "redux";
import {persistStore,persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from "src/redux/rootReducers";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
};

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
	persistReducer(persistConfig, rootReducer),
	compose(
		applyMiddleware(...getMiddleWares())
	)
);

const persistor = persistStore(store);

export {
	store as default,
	persistor
};
