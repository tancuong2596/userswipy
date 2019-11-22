import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Image} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import commonStyles from "src/styles/commonStyles";
import {addPersonToFavorite, fetchRandomPeople, markPersonAsShown} from "src/screens/People/peopleActions";
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
		markPersonAsShown: PropTypes.func,
	};

	static defaultProps = {
		people: [],
		peopleCount: 0,
		fetchingPeople: false,
		addPersonToFavorite: () => {
		},
		markPersonAsShown: () => {
		},
	};

	constructor(props) {
		super(props);

		this.state = {
			currentPersonIndex: 0,
		};
	}

	componentDidMount() {
		const {fetchRandomPeople} = this.props;

		fetchRandomPeople();
	}

	toolBarButtonPressed = () => {
		//showMessage("Alert", "Button clicked");
	};

	discardPerson = (person) => {
		const {markPersonAsShown} = this.props;

		markPersonAsShown(person);
		this.showNextPerson();
	};

	addPersonToFavorite = (person) => {
		const {addPersonToFavorite} = this.props;

		addPersonToFavorite(person);
		this.showNextPerson();
	};

	showNextPerson = () => this.setState({
		currentPersonIndex: this.state.currentPersonIndex + 1,
	}, () => {
		const {
			peopleCount,
			fetchRandomPeople,
		} = this.props;

		if (this.state.currentPersonIndex >= peopleCount) {
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
	addPersonToFavorite,
	markPersonAsShown,
})(People);
