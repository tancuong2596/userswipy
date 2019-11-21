const getPersonId = (person = {id: {}}) => {
	return person.id.name + person.id.value;
};

export {
	getPersonId
};
