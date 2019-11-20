import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text} from "react-native";

import {fetchRandomPeople} from "src/screens/People/peopleActions";

class People extends Component {
	componentDidMount() {
		const {fetchRandomPeople} = this.props;

		fetchRandomPeople();
	}

	render() {
		return (
			<View>
				<Text>
					People Screen
				</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
	fetchRandomPeople
})(People);
