import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text} from "react-native";

class People extends Component {
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
})(People);
