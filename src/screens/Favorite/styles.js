import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	item: {
		height: 72,
		width: "100%",
		flexDirection: "row",
		padding: 4,
	},
	personPicture: {
		width: 68,
		height: 68,
	},
	personName: {
		fontWeight: "bold",
	},
	contactInfo: {
		fontSize: 10,
		color: "#6f6f6f"
	},
	infoContainer: {
		marginLeft: 8,
		marginTop: 8
	}
});

export default styles;
