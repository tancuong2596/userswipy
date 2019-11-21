import {StyleSheet} from "react-native";

const AVATAR_SIZE = 162;

const styles = StyleSheet.create({
	avatar: {
		width: AVATAR_SIZE,
		height: AVATAR_SIZE,
		borderWidth: 1,
		borderColor: "#rgba(0, 0, 0, 0.25)",
		borderRadius: AVATAR_SIZE / 2,
		backgroundColor: "#fff",
	},
	image: {
		width: AVATAR_SIZE - 12,
		height: AVATAR_SIZE - 12,
		borderRadius: AVATAR_SIZE / 2
	}
});

export default styles;
