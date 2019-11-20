import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text} from "react-native";

import {fetchRandomPeople} from "src/screens/People/peopleActions";
import SwipableCards from 'src/components/SwipableCards/SwipableCards';

class People extends Component {
	componentDidMount() {
		const {fetchRandomPeople} = this.props;

		fetchRandomPeople();
	}

	render() {
		return (
			<View style={{
				flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"
			}}>
				<SwipableCards/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
	fetchRandomPeople
})(People);
