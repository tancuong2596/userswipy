import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Image, FlatList} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import commonStyles from "src/styles/commonStyles";
import favorite from "src/assets/icons/favorite.png"

class Favorite extends Component {
	static navigationOptions = {
		tabBarIcon: ({focused}) => {
			return <Image source={favorite} style={{width: 22, height: 22}}/>
		}
	};

	static propTypes = {
		people: PropTypes.array,
	};

	static defaultProps = {
		people: [],
	};

	constructor(props) {
		super(props);

		this.viewabilityConfig = {viewAreaCoveragePercentThreshold: 50}
	}

	viewableItemChanged = () => {

	};

	renderItem = () => {
		return (
			<View style={styles.item}/>
		)
	};

	render() {
		return (
			<FlatList
				data={this.props.people}
				renderItem={this.renderItem}
				keyExtractor={(_, index) => index.toString()}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	people: state.people.favoritePeople
});

export default connect(mapStateToProps, {})(Favorite);
