import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Image} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import commonStyles from "src/styles/commonStyles";
import {addPersonToFavorite, fetchRandomPeople, showNextPeople} from "src/screens/People/peopleActions";
import Deck from "src/screens/People/components/Deck/Deck";
import person from "src/assets/icons/person.png";
import personSelected from "src/assets/icons/personSelected.png";

class People extends Component {
	static navigationOptions = {
		tabBarIcon: ({focused}) =>
			 <Image
				 source={focused ? personSelected : person}
				 style={{width: 22, height: 25}}
			 />
	};

	static propTypes = {
		people: PropTypes.array,
		peopleCount: PropTypes.number,
		fetchingPeople: PropTypes.bool,
		addPersonToFavorite: PropTypes.func,
		showNextPeople: PropTypes.func,
		fetchRandomPeople: PropTypes.func,
	};

	static defaultProps = {
		people: [],
		peopleCount: 0,
		fetchingPeople: false,
		addPersonToFavorite: () => {
		},
		showNextPeople: () => {
		},
		fetchRandomPeople: () => {
		},
	};

	componentDidMount() {
		const {
			people,
			fetchRandomPeople
		} = this.props;

		if (people.length === 0) {
			fetchRandomPeople();
		}
	}

	addPersonToFavorite = (person) => {
		const {
			addPersonToFavorite,
			showNextPeople
		} = this.props;

		addPersonToFavorite(person);
		showNextPeople();
	};

	render() {
		const {
			people = [],
			showNextPeople,
		} = this.props;

		const {matchParent, centerChildren} = commonStyles;

		return (
			<View style={[matchParent, centerChildren, styles.people]}>
				<Deck
					people={people}
					addPersonToFavorite={this.addPersonToFavorite}
					discardPerson={showNextPeople}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	people: state.people.people.showingData,
	peopleCount: state.people.people.showingData.length,
	fetchingPeople: state.people.people.fetching,
});

export default connect(mapStateToProps, {
	fetchRandomPeople,
	addPersonToFavorite,
	showNextPeople,
})(People);
