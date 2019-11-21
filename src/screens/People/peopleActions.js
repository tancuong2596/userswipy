import {createAction, createAsyncAction} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";

const fetchRandomPeople = (size = 5) => createAsyncAction({
	type: peopleActionTypes.FETCH_RANDOM_PEOPLE,
	payload: {
		params: {
			results: size
		}
	},
});

const markPersonAsShown = (person = null) => createAction({
	type: peopleActionTypes.MARK_PERSON_AS_SHOWN,
	payload: {
		person
	}
});

const addPersonToFavorite = (person = null) => createAction({
	type: peopleActionTypes.ADD_PERSON_TO_FAVORITE,
	payload: {
		person
	}
});

export {
	fetchRandomPeople,
	addPersonToFavorite,
	markPersonAsShown
};
