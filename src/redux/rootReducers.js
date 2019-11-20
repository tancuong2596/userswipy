import {persistStore} from "redux-persist";
import {combineReducers} from "redux";

import peopleReducers from "src/screens/People/peopleReducers";

const rootReducers = combineReducers({
	people: peopleReducers
});

export default rootReducers;
