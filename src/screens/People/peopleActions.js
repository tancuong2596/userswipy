import {createAction, createAsyncAction} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";
import showMessage from "src/utils/showMessage";

const fetchRandomPeople = (size = 8) => createAsyncAction({
	type: peopleActionTypes.FETCH_RANDOM_PEOPLE,
	payload: {
		params: {
			results: size
		}
	},
	onFailure: dispatch => {
		showMessage(
			"Sorry",
			"Cannot load list of people. Click 'retry' to try again.",
			[
				{
					text: 'Close',
					style: 'cancel',
				},
				{
					text: 'Retry',
					onPress: () => dispatch(fetchRandomPeople()),
				},
			]
		)
	}
});

const addPersonToFavorite = (person = null) => createAction({
	type: peopleActionTypes.ADD_PERSON_TO_FAVORITE,
	payload: {
		person
	}
});

const isShowingDataEmpty = (getState) => {
	try {
		return getState().people.people.showingData.length <= 1;
	} catch {
		// skip
	}

	return true;
};

const showNextPeople = () => (dispatch, getState) => {
	dispatch({
		type: peopleActionTypes.SHOW_NEXT_PEOPLE,
		payload: {}
	});

	if (isShowingDataEmpty(getState)) {
		dispatch(fetchRandomPeople());
	}
};

export {
	showNextPeople,
	fetchRandomPeople,
	addPersonToFavorite,
};
