import {} from "src/utils/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";
import {createAsyncAction} from "src/utils/api";

const fetchRandomPeople = () => createAsyncAction({
	type: peopleActionTypes.FETCH_RANDOM_PEOPLE,
	payload: {
		params: {
			results: 5
		}
	},
});

export {
	fetchRandomPeople
};
