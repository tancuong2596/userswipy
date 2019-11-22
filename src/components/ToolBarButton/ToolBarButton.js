import React, {Component} from "react";
import {Animated, ScrollView, Image, View, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import commonStyles from "src/styles/commonStyles";

class ToolBarButton extends Component {
	static propTypes = {
		onPress: PropTypes.func,
		selected: PropTypes.bool,
	};

	static defaultProps = {
		onPress: () => {
		},z
		selected: false,
	};

	static getDerivedStateFromProps = (nextProps, prevState) => {
		if (nextProps.selected !== prevState.selected) {
			return {
				selected: nextProps.selected,
			};
		}

		return null;
	};

	constructor(props) {
		super(props);

		this.state = {
			selected: props.selected,
		};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.selected !== this.state.selected) {
			if (this.ref) {
				this.ref.scrollTo({
					x: 0,
					y: this.state.selected ? 94 : 0,
					animated: true
				});
			}
		}
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<ScrollView
					ref={ref => this.ref = ref}
					style={styles.toolBarButton}
					contentContainerStyle={commonStyles.centerChildren}
					showsVerticalScrollIndicator={false}
				>
					<Image
						source={this.props.icon}
						style={styles.toolBarButtonIcon}
					/>
					<View style={{height: 4}}/>
					<Image
						source={this.props.selectedIcon}
						style={styles.toolBarButtonIcon}
					/>
				</ScrollView>
			</TouchableOpacity>
		);
	}
}

export default ToolBarButton;
