import React, {Component} from "react";
import {View, TouchableWithoutFeedback, Image} from "react-native";
import PropTypes from "prop-types";

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
import {userInfo} from "src/constants/constants";

const buttons = [
	{
		icon: person,
		selectedIcon: personSelected,
		value: userInfo.NAME,
	},
	{
		icon: mail,
		selectedIcon: mailSelected,
		value: userInfo.MAIL,
	},
	{
		icon: calender,
		selectedIcon: calenderSelected,
		value: userInfo.BIRTHDAY,
	},
	{
		icon: map,
		selectedIcon: mapSelected,
		value: userInfo.ADDRESS,
	},
	{
		icon: phone,
		selectedIcon: phoneSelected,
		value: userInfo.PHONE,
	}
];

class ToolBar extends Component {
	static propTypes = {
		isButtonSelected: PropTypes.array,
		onButtonPressed: PropTypes.func
	};

	static defaultProps = {
		isButtonSelected: [],
		onButtonPressed: () => {
		}
	};

	toggleButtonAt = (selectedIndex) => {
		this.props.onButtonPressed(buttons[selectedIndex].value, selectedIndex);
	};

	render() {
		return (
			<TouchableWithoutFeedback>
				<View style={styles.toolBar}>
					{buttons.map(
						(button, index) => <ToolBarButton
							key={index}
							{...button}
							selected={this.props.isButtonSelected[index]}
							onPress={this.toggleButtonAt.bind(this, index)}
						/>
					)}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ToolBar;
