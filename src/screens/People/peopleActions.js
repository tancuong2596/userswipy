import {} from "src/utils/extensions/api";
import peopleActionTypes from "src/redux/actionTypes/peopleActionTypes";
import {createAsyncAction} from 'src/utils/extensions/api';

const fetchRandomPeople = () => createAsyncAction({
	type: peopleActionTypes.FETCH_RANDOM_PEOPLE,
	payload: {}
});

export {
	fetchRandomPeople
};
