import React, {Component} from "react";
import {Text, View} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import SwipableCard from "src/components/SwipableCard/SwipableCard";
import Avatar from "src/components/Avatar/Avatar";
import {constructFullName} from "src/utils/strings";
import ToolBar from "src/components/ToolBar/ToolBar";

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

	renderCard = (person = {}, index) => {
		const {
			discardPerson,
			addPersonToFavorite,
		} = this.props;

		const {
			picture = {},
			name = {first: "", last: ""},
		} = person;

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
						Hi, My name is
					</Text>
					<Text style={styles.personNameLabel} numberOfLines={2}>
						{constructFullName(name)}
					</Text>
					<ToolBar onButtonPressed={this.toolBarButtonPressed}/>
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

