import React, {Component} from 'react';
import {Animated, PanResponder, Dimensions, Easing} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const MARGIN_WIDTH = SCREEN_WIDTH / 4;

class SwipableCard extends Component {
	static propTypes = {
		onSwipeLeft: PropTypes.func,
		onSwipeRight: PropTypes.func,
	};

	static defaultProps = {
		onSwipeLeft: () => {
		},
		onSwipeRight: () => {
		},
	};

	constructor(props) {
		super(props);

		this.state = {
			deltaX: new Animated.Value(0),
			cardOpacity: new Animated.Value(1),
			onRightMargin: false,
			onLeftMargin: false,
		};

		this.panResponder = PanResponder.create(this);
	}

	onStartShouldSetPanResponder = (evt, gestureState) => false;

	onMoveShouldSetPanResponder = (evt, gestureState) => true;

	onStartShouldSetPanResponderCapture = (evt, gestureState) => false;

	onMoveShouldSetPanResponderCapture = (evt, gestureState) => true;

	onPanResponderMove = (evt, gestureState = {}) => {
		const onLeftMargin = gestureState.dx < MARGIN_WIDTH - SCREEN_WIDTH;
		const onRightMargin = gestureState.dx > SCREEN_WIDTH - MARGIN_WIDTH;

		this.state.deltaX.setValue(gestureState.dx);

		this.setState({
			onLeftMargin,
			onRightMargin,
		});
	};

	onPanResponderRelease = (evt, gestureState) => {
		const {onLeftMargin, onRightMargin} = this.state;

		if (onLeftMargin || onRightMargin) {
			this.removeCurrentCard();
		} else {
			this.flyBackToOriginalPosition();
		}
	};

	onCardDisappear = () => {
		const {onLeftMargin, onRightMargin} = this.state;
		const {onSwipeLeft, onSwipeRight} = this.props;

		if (onLeftMargin) {
			onSwipeLeft();
		} else if (onRightMargin) {
			onSwipeRight();
		}
	};

	removeCurrentCard = () => {
		const {onLeftMargin} = this.state;

		Animated.parallel([
			Animated.timing(this.state.deltaX, {
				toValue: (onLeftMargin ? -1 : 1) * SCREEN_WIDTH,
				duration: 200,
			}),
			Animated.timing(this.state.cardOpacity, {
				toValue: 0,
				duration: 200,
			}),
		], {
			useNativeDriver: true
		}).start(this.onCardDisappear);
	};

	flyBackToOriginalPosition = () => {
		Animated.timing(this.state.deltaX, {
			toValue: 0,
			duration: 200,
		}, {
			useNativeDriver: true
		}).start();
	};

	render() {
		const {styles: customStyles = {}} = this.props;

		const rotateCard = this.state.deltaX.interpolate({
			inputRange: [-200, 0, 200],
			outputRange: ["-20deg", "0deg", "20deg"],
		});

		const animatedViewStyles = [
			styles.card,
			{
				opacity: this.state.cardOpacity,
				transform: [
					{translateX: this.state.deltaX},
					{rotate: rotateCard},
				],
			},
			customStyles
		];

		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={animatedViewStyles}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}

export default SwipableCard;
