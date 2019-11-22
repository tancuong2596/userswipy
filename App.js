/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import "react-native-gesture-handler";
import React from "react";
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, {persistor} from "src/redux/store";
import Root from "./Root";

const App: () => React$Node = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Root/>
			</PersistGate>
		</Provider>
	);
};

export default App;
