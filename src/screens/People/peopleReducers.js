import {toFailure, toRequest, toSuccess} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";
import {getPersonId} from "src/utils/misc";

const initialState = {
	people: {
		data: [],
		fetching: false
	},
	shownPeopleId: {},
	favoritePeople: [],
};

const combinePeopleData  = (newData = [], oldData = []) => {
	return [
		...oldData,
		...newData
	];
};

const peopleReducers = (state = initialState, {type, payload = {}} = {}) => {
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
		case peopleActionTypes.ADD_PERSON_TO_FAVORITE: {
			const {person} = payload;

			if (person === null) {
				return state;
			}

			return {
				...state,
				favoritePeople: [
					...state.favoritePeople,
					person
				],
				shownPeopleId: {
					...state.shownPeopleId,
					[getPersonId(person)]: true
				}
			};
		}
		case peopleActionTypes.MARK_PERSON_AS_SHOWN: {
			const {person} = payload;

			if (person === null) {
				return state;
			}

			return {
				...state,
				shownPeopleId: {
					...state.shownPeopleId,
					[getPersonId(person)]: true
				}
			};
		}
		default:
			return state;
	}
};

export default peopleReducers;
