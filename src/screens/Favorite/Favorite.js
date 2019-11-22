import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Image, FlatList, Text} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import favorite from "src/assets/icons/favorite.png";
import {constructFullName} from "src/utils/strings";

class Favorite extends Component {
	static navigationOptions = {
		tabBarIcon: ({focused}) => {
			return <Image source={favorite} style={{width: 22, height: 22}}/>;
		},
	};

	static propTypes = {
		people: PropTypes.array,
	};

	static defaultProps = {
		people: [],
	};

	constructor(props) {
		super(props);
	}

	renderItem = ({item: person = {}}, index) => {
		const {
			name = {first: "", last: ""},
			picture = {},
			email,
			phone,
			cell,
		} = person;

		return (
			<View key={index} style={styles.item}>
				<Image style={styles.personPicture} source={{uri: picture.large}}/>
				<View style={styles.infoContainer}>
					<Text style={styles.personName}>{constructFullName(name)}</Text>
					<Text style={styles.contactInfo}>{email || phone || cell || ""}</Text>
				</View>
			</View>
		);
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
	people: state.people.favoritePeople,
});

export default connect(mapStateToProps, {})(Favorite);
