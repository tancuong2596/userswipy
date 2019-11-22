import React, {Component} from "react";
import {Text, View} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import SwipableCard from "src/components/SwipableCard/SwipableCard";
import Avatar from "src/components/Avatar/Avatar";
import {constructAddress, constructDOB, constructFullName} from "src/utils/strings";
import ToolBar from "src/components/ToolBar/ToolBar";
import {userInfo} from "src/constants/constants";

const greetingLabel = {
	[userInfo.NAME]: "Hi, My name is",
	[userInfo.MAIL]: "My email address is",
	[userInfo.BIRTHDAY]: "My birthday is",
	[userInfo.ADDRESS]: "My address is",
	[userInfo.PHONE]: "My phone number is",
};

class Deck extends Component {
	static propTypes = {
		people: PropTypes.array,
		discardPerson: PropTypes.func,
		addPersonToFavorite: PropTypes.func,
	};

	static defaultProps = {
		people: [],
		discardPerson: () => {
		},
		addPersonToFavorite: () => {
		},
	};

	constructor(props) {
		super(props);

		this.state = {
			showingInfo: userInfo.NAME,
			isButtonSelected: Object.keys(userInfo).map((_, index) => index === 0)
		};
	}

	toolBarButtonPressed = (info, selectedIndex) => {
		this.setState({
			showingInfo: info,
			isButtonSelected: Object.keys(userInfo).map((_, index) => index === selectedIndex)
		});
	};

	showUserInfo = (person = {}) => {
		const {showingInfo} = this.state;
		const {
			name = {first: "", last: ""},
			email = "",
			dob = {date: ""},
			location = {},
			phone = ""
		} = person;

		switch (showingInfo) {
			case userInfo.NAME:
				return constructFullName(name);
			case userInfo.MAIL:
				return email;
			case userInfo.BIRTHDAY:
				return constructDOB(dob);
			case userInfo.ADDRESS:
				return constructAddress(location);
			case userInfo.PHONE:
				return phone;
		}

		return "";
	};

	renderCard = (person = {}, index) => {
		const {
			discardPerson,
			addPersonToFavorite,
		} = this.props;

		const {picture = {}} = person;

		return (
			<SwipableCard
				key={index}
				styles={styles.card}
				onSwipeLeft={discardPerson}
				onSwipeRight={addPersonToFavorite.bind(this, person)}
			>
				<View style={styles.upperCard}>
					<Avatar imageUrl={picture.large}/>
				</View>
				<View style={styles.lowerCard}>
					<Text style={styles.greetingLabel}>
						{greetingLabel[this.state.showingInfo]}
					</Text>
					<Text
						style={styles.personNameLabel}
						numberOfLines={2}
						allowFontScaling
						minimumFontScale={0.5}
					>
						{this.showUserInfo(person)}
					</Text>
					<ToolBar
						onButtonPressed={this.toolBarButtonPressed}
						isButtonSelected={this.state.isButtonSelected}
					/>
				</View>
			</SwipableCard>
		);
	};

	render() {
		const showingData = [...this.props.people];
		return showingData.reverse().map(this.renderCard);
	}
}

export default Deck;

