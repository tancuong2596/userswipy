import {View, Text, ToastAndroid, Alert, Platform} from "react-native";

const showMessage = (title, message) => {
	Alert.alert(
		title,
		message,
		[
			{
				text: 'Close',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
		],
		{cancelable: false},
	);};

export default showMessage;
