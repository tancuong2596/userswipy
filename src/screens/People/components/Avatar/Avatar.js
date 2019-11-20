import React from "react";
import {Image, View} from "react-native";

import styles from "src/screens/People/components/Avatar/styles";
import commonStyles from "src/styles/commonStyles";
import abc from "src/utils/abc.jpg";

const Avatar = ({imageUrl = ""} = {}) => {
	return (
		<View style={[styles.avatar, commonStyles.centerChildren]}>
			<Image
				style={styles.image}
				source={{uri: "https://randomuser.me/api/portraits/women/54.jpg"}}
				resizeMode={"stretch"}
			/>
		</View>
	);
};

export default Avatar;
