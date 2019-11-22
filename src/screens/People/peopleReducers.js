import {toFailure, toRequest, toSuccess} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";

const initialState = {
	people: {
		showingData: [],
		fetching: false
	},
	favoritePeople: [],
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
					...state.people,
					fetching: false,
					showingData: [
						...state.people.showingData,
						...payload.results
					],
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
		case peopleActionTypes.SHOW_NEXT_PEOPLE: {
			const newShowingData = [...state.people.showingData];
			newShowingData.shift();

			return {
				...state,
				people: {
					...state.people,
					showingData: newShowingData
				}
			};
		}
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
				]
			};
		}
		default:
			return state;
	}
};

export default peopleReducers;
