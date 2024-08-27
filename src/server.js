const apiKey = process.env.REACT_APP_API_KEY;
export const apiUrlPopular = process.env.REACT_APP_API_URL_POPULAR;
export const apiUrlKeyword = process.env.REACT_APP_API_URL_KEYWORD;
export const url404 = process.env.REACT_APP_URL_404;

const options = {
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
    },
}

// Функция для получения данных о фильмах
export const getData = (url) => {
    return fetch(url, options).then(resp => resp.json());
};




export function trimSentences(text, numSentences) {
    //console.log(text)
    if (!text) return 0;
    const sentences = text.match(/[^.!?]+[.!?]+/g);

    if (!sentences || sentences.length <= numSentences) {
        return text;
    }

    const trimmedSentences = sentences.slice(0, numSentences).join(' ');
    return trimmedSentences.trim();
}


