const toRequest = type => `${type}_REQUEST`;

const toSuccess = type => `${type}_SUCCESS`;

const toFailure = type => `${type}_FAILURE`;

const validateResponseAndConvertToJSON = async (response) => {
	if (!response.ok) {
		throw new Error(JSON.stringify(response));
	}

	const jsonResponse = await response.json();

	if (typeof jsonResponse.error !== "undefined") {
		throw new Error(jsonResponse.error);
	}

	return jsonResponse;
};

const createAsyncAction = ({type, payload = {}, onSuccess, onFailure} = {}) => async dispatch => {
	try {
		dispatch({
			type: toRequest(type),
			payload: payload
		});

		const response = await fetch(
			"https://randomuser.me/api"
		);

		const json = await validateResponseAndConvertToJSON(response);

		if (typeof onSuccess == "function") {
			onSuccess(dispatch, json);
		}

		return dispatch({
			type: toSuccess(type),
			payload: json
		});
	} catch (error) {
		if (typeof onFailure == "function") {
			onFailure(dispatch, error);
		}

		return dispatch({
			type: toFailure(type),
			payload: JSON.stringify(
				typeof error == "string" ? error.message : {}
				)
		});
	}
};

export {
	toFailure,
	toSuccess,
	toRequest,
	createAsyncAction
};
