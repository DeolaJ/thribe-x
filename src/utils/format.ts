export const generateAlphaNumericString = (length: number) => {
    return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join("");
};

export const cleanInput = (value?: string) => `${value}`.replace(/[<>%$]/gi, "");

export const truncateText = (text?: string, limit = 100) => {
    if (!text?.length) return "";
    if (text.length <= limit) {
        return text;
    }
    return `${text.slice(0, limit)}...`;
};

export const formatUrl = (url?: string) => {
    if (!url) return "";
    const httpsIdx = url.indexOf("https://");
    const httpIdx = url.indexOf("http://");
    if (httpsIdx !== -1 || httpIdx !== -1) return url;
    return `https://${url}`;
};
