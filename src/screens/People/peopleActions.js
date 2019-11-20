const fetchRandomPeople = () => async dispatch => {
	try {
		const response = await fetch("https://randomuser.me/api");
		console.log(response);
	} catch (e) {

	}
};

export {
	fetchRandomPeople
};
