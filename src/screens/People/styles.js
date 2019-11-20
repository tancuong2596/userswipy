import {Dimensions, StyleSheet} from "react-native";

import commonStyles from 'src/styles/commonStyles';

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	card: {
		flexDirection: "column",
		width: Math.min(SCREEN_WIDTH * 0.8, 350),
		minHeight: 100,
		backgroundColor: "transparent",
		borderRadius: 10,
		overflow: "hidden",
		...commonStyles.castShadow
	},
	upperCard: {
		width: "100%",
		height: 130,
		backgroundColor: "#f9f9f9",
		borderBottomWidth: 0.5,
		borderColor: "#rgba(0, 0, 0, 0.15)",
		overflow: "visible",
		alignItems: "center",
		zIndex: 1000
	},
	lowerCard: {
		width: "100%",
		height: 260,
		backgroundColor: "#fff",
	},
	avatar: {
		width: 162,
		height: 162,
		borderRadius: 162 / 2,
		backgroundColor: "red",
		marginTop: 20,
	}
});

export default styles;
