import {createBottomTabNavigator} from "react-navigation-tabs";
import People from "src/screens/People/People";
import Favorite from "src/screens/Favorite/Favorite";
import {createAppContainer} from "react-navigation";

const AppNavigator = createBottomTabNavigator({
	People: People,
	Favorite: Favorite
}, {
	initialRouteName: "People"
});

const Root = createAppContainer(AppNavigator);

export default Root;
