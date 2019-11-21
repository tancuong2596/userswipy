import {createAction, createAsyncAction} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";

const fetchRandomPeople = () => createAsyncAction({
	type: peopleActionTypes.FETCH_RANDOM_PEOPLE,
	payload: {
		params: {
			results: 5
		}
	},
});

const markPersonAsShown = (personId = null) => createAction({
	type: peopleActionTypes.MARK_PERSON_AS_SHOWN,
	payload: {
		personId
	}
});

const addPersonToFavorite = (personId = null) => createAction({
	type: peopleActionTypes.ADD_PERSON_TO_FAVORITE,
	payload: {
		personId
	}
});

export {
	fetchRandomPeople,
	addPersonToFavorite,
	markPersonAsShown
};
