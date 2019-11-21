import React, {Component} from "react";
import {View, TouchableWithoutFeedback, Image} from "react-native";

import styles from "./styles";
import person from "src/assets/icons/person.png";
import mail from "src/assets/icons/mail.png";
import calender from "src/assets/icons/calendar.png";
import map from "src/assets/icons/map.png";
import phone from "src/assets/icons/phone.png";
import personSelected from "src/assets/icons/personSelected.png";
import mailSelected from "src/assets/icons/mailSelected.png";
import calenderSelected from "src/assets/icons/calendarSelected.png";
import mapSelected from "src/assets/icons/mapSelected.png";
import phoneSelected from "src/assets/icons/phoneSelected.png";
import ToolBarButton from "src/components/ToolBarButton/ToolBarButton";

const buttons = [
	{
		icon: person,
		selectedIcon: personSelected
	},
	{
		icon: mail,
		selectedIcon: mailSelected
	},
	{
		icon: calender,
		selectedIcon: calenderSelected
	},
	{
		icon: map,
		selectedIcon: mapSelected
	},
	{
		icon: phone,
		selectedIcon: phoneSelected
	}
];

class ToolBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isButtonSelected: buttons.map(_ => false)
		}
	}

	toggleButtonAt = (selectedIndex) => {
		this.setState({
			isButtonSelected: buttons.map((_, index) => index === selectedIndex)
		});
	};

	render() {
		return (
			<TouchableWithoutFeedback>
				<View style={styles.toolBar}>
					{buttons.map(
						(button, index) => <ToolBarButton
							key={index}
							{...button}
							selected={this.state.isButtonSelected[index]}
							onPress={this.toggleButtonAt.bind(this, index)}
						/>
					)}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ToolBar;
