import React, {Component} from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import commonStyles from "src/styles/commonStyles";
import {fetchRandomPeople} from "src/screens/People/peopleActions";
import Deck from "src/screens/People/components/Deck/Deck";

class People extends Component {
	static propTypes = {
		people: PropTypes.array,
		peopleCount: PropTypes.number,
		fetchingPeople: PropTypes.bool,
	};

	static defaultProps = {
		people: [],
		peopleCount: 0,
		fetchingPeople: false,
	};

	constructor(props) {
		super(props);

		this.state = {
			currentPersonIndex: 0
		};
	}

	componentDidMount() {
		const {fetchRandomPeople} = this.props;

		fetchRandomPeople();
	}

	toolBarButtonPressed = () => {
		//showMessage("Alert", "Button clicked");
	};

	discardPerson = () => {
		this.showNextPerson();
	};

	addPersonToFavorite = () => {
		this.showNextPerson();
	};

	showNextPerson = () => this.setState({
		currentPersonIndex: this.state.currentPersonIndex + 1
	}, () => {
		const {
			peopleCount,
			fetchRandomPeople
		} = this.props;

		if (this.state.currentPersonIndex + 1 >= peopleCount) {
			fetchRandomPeople();
		}
	});

	render() {
		const {currentPersonIndex} = this.state;
		const {people = []} = this.props;
		const {matchParent, centerChildren} = commonStyles;

		return (
			<View style={[matchParent, centerChildren, styles.people]}>
				<Deck
					people={people}
					currendIndex={currentPersonIndex}
					showNextPerson={this.showNextPerson}
					addPersonToFavorite={this.addPersonToFavorite}
					discardPerson={this.discardPerson}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	people: state.people.people.data,
	peopleCount: state.people.people.data.length,
	fetchingPeople: state.people.people.fetching,
});

export default connect(mapStateToProps, {
	fetchRandomPeople,
})(People);
