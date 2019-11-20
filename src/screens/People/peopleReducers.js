import {toFailure, toRequest, toSuccess} from 'src/utils/extensions/api';
import peopleActionTypes from 'src/redux/actionTypes/peopleActionTypes';

const initialState = {
	people: {
		data: [],
		fetching: false
	}
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
					data: [
						...state.people.data,
						...(payload.results || []),
					]
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
