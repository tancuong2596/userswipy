import {createAction, createAsyncAction} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";

const fetchRandomPeople = (size = 8) => createAsyncAction({
	type: peopleActionTypes.FETCH_RANDOM_PEOPLE,
	payload: {
		params: {
			results: size
		}
	},
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

	return false;
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
