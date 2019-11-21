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

export {
    convertParamsToString,
    constructFullName,
    firstLetterUppercase,
    isEmptyString,
};
