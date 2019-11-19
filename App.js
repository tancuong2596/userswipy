/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {Provider} from "react-redux";
import {View, Text} from "react-native";

import People from "src/screens/People/People";
import store from "src/redux/store";

const App: () => React$Node = () => {
/*	return (
		<Provider store={store}>
			<People/>
		</Provider>
	); */
return (
	<View>
		<Text>ABC</Text>
	</View>
)
};

export default App;
