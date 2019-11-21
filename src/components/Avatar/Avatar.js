import React from "react";
import {Image, View} from "react-native";

import styles from "src/components/Avatar/styles";
import commonStyles from "src/styles/commonStyles";

const Avatar = ({imageUrl = ""} = {}) => {
	return (
		<View style={[styles.avatar, commonStyles.centerChildren]}>
			<Image
				style={styles.image}
				source={{uri: imageUrl}}
			/>
		</View>
	);
};

export default Avatar;
