import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text, Image} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import commonStyles from "src/styles/commonStyles";
import {fetchRandomPeople} from "src/screens/People/peopleActions";
import SwipableCard from "src/components/SwipableCard/SwipableCard";
import Avatar from "src/screens/People/components/Avatar/Avatar";

class People extends Component {
	static propTypes = {
		people: PropTypes.array,
		fetchingPeople: PropTypes.bool,
	};

	static defaultProps = {
		people: [],
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

	render() {
		const {currentPersonIndex = 0} = this.state;
		const {people} = this.props;
		const {matchParent, centerChildren} = commonStyles;
		const {
			picture = {}
		} = people[currentPersonIndex] || {};

		return (
			<View style={[matchParent, centerChildren, styles.people]}>
				<SwipableCard styles={styles.card}>
					<View style={styles.upperCard}>
						<Avatar imageUrl={picture.large}/>
					</View>
					<View style={styles.lowerCard}>

					</View>
				</SwipableCard>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	people: state.people.people.data,
	fetchingPeople: state.people.people.fetching,
});

export default connect(mapStateToProps, {
	fetchRandomPeople,
})(People);
