const isEmptyString = (string) => (typeof string === "string" && string.length === 0) || false;

const firstLetterUppercase = (string = "") =>
	isEmptyString(string) ? string : (string[0].toUpperCase() + string.substr(1, string.length - 1).toLowerCase());

const constructFullName = (name = {}) => {
	const {first = "", last = ""} = name;

	return [first, last]
		.filter(name => name.length > 0)
		.map(firstLetterUppercase)
		.join(" ");
};

const convertParamsToString = (params = {}) => {
	if (Object.keys(params).length === 0) {
		return "";
	}

	return "?" + Object
		.entries(params)
		.map(param => `${param[0]}=${param[1]}`)
		.join("&");
};

const constructAddress = (location = {}) => {
	const {
		city,
		country,
		state,
		street = {}
	} = location;

	const {name: streetName, number} = street;

	return [number, streetName]
		.filter(val => !!val)
		.join(" ");
};

// https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
const formatDate = (date) => {
	const monthNames = [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	];

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	return monthNames[monthIndex].substring(0, 3) + " " + day + ", " + year;
};

const constructDOB = (dob = {}) => {
	const {date} = dob;

	return formatDate(new Date(date));
};

export {
	convertParamsToString,
	constructFullName,
	constructAddress,
  constructDOB,
	firstLetterUppercase,
	isEmptyString,
};
