//https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
const isSameObject = (obj1, obj2) => {
	return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export {
	isSameObject
};
