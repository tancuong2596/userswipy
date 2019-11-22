import {Dimensions, StyleSheet} from "react-native";

import commonStyles from "src/styles/commonStyles";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	card: {
		flexDirection: "column",
		width: Math.min(SCREEN_WIDTH * 0.8, 350),
		minHeight: 100,
		backgroundColor: "transparent",
		borderRadius: 10,
		overflow: "hidden",
		position: "absolute",
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
		zIndex: 1000,
		paddingTop: 20
	},
	lowerCard: {
		paddingTop: 70,
		paddingBottom: 70,
		flexDirection: "column",
		width: "100%",
		maxHeight: 360,
		backgroundColor: "#fff",
		...commonStyles.centerChildren
	},
	greetingLabel: {
		fontSize: 18,
		color: "#999"
	},
	personNameLabel: {
		color: "#2c2e31",
		fontSize: 30,
		width: "100%",
		minHeight: 86,
		margin: 5,
		textTransform: "capitalize",
		textAlign: "center",
	},
	backCard: {
		...commonStyles.overlayOnParent,
		...commonStyles.centerChildren,
	}
});

export default styles;
