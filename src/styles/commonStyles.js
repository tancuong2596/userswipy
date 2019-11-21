import {StyleSheet, Platform} from "react-native";

const commonStyles = StyleSheet.create({
	matchParent: {
		flex: 1,
	},
	centerChildren: {
		alignItems: "center",
		justifyContent: "center"
	},
	castShadow: Platform.select({
		ios: {
			shadowColor: "#000",
			shadowOffset: {
				width: 3,
				height: 3,
			},
			shadowOpacity: 0.2,
			shadowRadius: 5
		},
		android: {
			borderWidth: 0.5,
			borderColor: "#rgba(0, 0, 0, 0.15)",
			elevation: 1
		}
	}),
	overlayOnParent: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: "transparent"
	}
});

export default commonStyles;
