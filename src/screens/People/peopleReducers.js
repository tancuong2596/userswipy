import {toFailure, toRequest, toSuccess} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";
import {getPersonId} from "src/utils/misc";

const initialState = {
	people: {
		data: [],
		fetching: false
	}
};

const combinePeopleData  = (newData = [], oldData = []) => {
	const existingIds = new Set(
		oldData.map(getPersonId)
	);

	return [
		...oldData,
		...newData.filter(person => !existingIds.has(getPersonId(person))),
	];
};

const peopleReducers = (state = initialState, {type, payload} = {}) => {
	switch (type) {
		case toRequest(peopleActionTypes.FETCH_RANDOM_PEOPLE):
			return {
				...state,
				people: {
					...state.people,
					fetching: true,
				}
			};
		case toSuccess(peopleActionTypes.FETCH_RANDOM_PEOPLE):
			return {
				...state,
				people: {
					fetching: false,
					data: combinePeopleData(payload.results, state.people.data)
				}
			};
		case toFailure(peopleActionTypes.FETCH_RANDOM_PEOPLE):
			return {
				...state,
				people: {
					...state.people,
					fetching: false
				}
			};
		default:
			return state;
	}
};

export default peopleReducers;
