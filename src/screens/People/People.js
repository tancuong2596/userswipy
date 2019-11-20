import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import commonStyles from 'src/styles/commonStyles';
import {fetchRandomPeople} from 'src/screens/People/peopleActions';
import SwipableCard from 'src/components/SwipableCard/SwipableCard';

class People extends Component {
	static propTypes = {
		people: PropTypes.array,
		fetchingPeople: PropTypes.bool,
	};

	static defaultProps = {
		people: [],
		fetchingPeople: false,
	};

	componentDidMount() {
		const {fetchRandomPeople} = this.props;

		fetchRandomPeople();
	}

	render() {
		const {people} = this.props;
		const {matchParent, centerChildren} = commonStyles;

		return (
			<View style={[matchParent, centerChildren]}>
				<SwipableCard styles={styles.card}>
					<View style={styles.upperCard}>
						<View style={styles.avatar}/>
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
