const makeFullAddress = ({address, ward, district, province}) => [address, ward, district, province].join(", ");

const isEmptyString = (string) => (typeof string === "string" && string.length === 0) || false;

const firstLetterUppercase = (string = "") =>
    isEmptyString(string) ? string : (string[0].toUpperCase() + string.substr(1, string.length - 1).toLowerCase());

const capitalizeString = (string = "") => string.split(/[\s]+/).map(firstLetterUppercase).join(" ");

const formatNumber = (number, radio = 2) => {
    if (typeof number === "undefined") {
        return "";
    }

    if (number.toString().indexOf(",") > 0) {
        return number;
    }

    number = Number.parseFloat(number).toFixed(radio);

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatMoney = price => formatNumber(price, 0);

const formatWithCurrency = (price, format = true) => {
    const number = format ? formatMoney(price) : price;

    return `${number} ₫`;
};

const addLeadingZeros = (number, zeroCount = 2) => {
    if (isNaN(number)) {
        return "0".repeat(zeroCount);
    }

    const numberStr = `${number}`;
    const numberLength = numberStr.length;

    return numberLength > zeroCount
        ? numberStr
        : "0".repeat(zeroCount - numberLength) + numberStr;
};

const formatString = (format, ...args) => format.replace(
    /{(\d+)}/g,
    (match, number) => typeof args[number] != "undefined" ? args[number] : match
);

const convertStringToJSON = str => {
    if (typeof str !== "string") {
        return {};
    }

    try {
        return JSON.parse(str);
    } catch (e) {
        return {};
    }
};

export {
    convertStringToJSON,
    makeFullAddress,
    formatWithCurrency,
    firstLetterUppercase,
    capitalizeString,
    isEmptyString,
    formatNumber,
    formatMoney,
    addLeadingZeros,
    formatString
};
