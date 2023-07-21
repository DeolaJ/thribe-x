export const generateAlphaNumericString = (length) => {
    return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join("");
};

export const cleanInput = (value) => `${value}`.replace(/[<>%$]/gi, "");

export const truncateText = (text, limit = 100) => {
    if (!text?.length) return "";
    if (text.length <= limit) {
        return text;
    }
    return `${text.slice(0, limit)}...`;
};
