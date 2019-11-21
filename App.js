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
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

import People from "src/screens/People/People";
import Favorite from "src/screens/Favorite/Favorite";
import store from "src/redux/store";

const AppNavigator = createBottomTabNavigator({
	People: People,
	Favorite: Favorite
}, {
	initialRouteName: "People"
});

const Root = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
	return (
		<Provider store={store}>
			<Root/>
		</Provider>
	);
};

export default App;
