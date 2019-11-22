import {View, Text, ToastAndroid, Alert, Platform} from "react-native";

const defaultButtons = [
	{
		text: 'Close',
		onPress: () => console.log('Cancel Pressed'),
		style: 'cancel',
	},
];

const showMessage = (title, message, buttons = defaultButtons) => {
	Alert.alert(
		title,
		message,
		buttons,
		{cancelable: false},
	);
};

export default showMessage;
