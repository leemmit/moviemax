const rapidapiKey = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidapiHost = process.env.REACT_APP_RAPIDAPI_HOST;

const kinopoiskKey = process.env.REACT_APP_KINOPOISK_KEY;
export const kinopoiskUrlPopular = process.env.REACT_APP_KINOPOISK_URL_POPULAR;
// export const kinopoiskUrlPopular = 'https://moviesdatabase.p.rapidapi.com/titles/random';
// export const kinopoiskUrlKeyword = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D?exact=true&titleType=movie';
export const kinopoiskUrlKeyword = process.env.REACT_APP_KINOPOISK_URL_KEYWORD;
export const url404 = process.env.REACT_APP_URL_404;

const options = [{
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": kinopoiskKey,
    },
},
{
    // method: 'GET',
	// headers: {
    //     "Content-Type": "application/json",
	// 	'x-rapidapi-key': rapidapiKey,
	// 	'x-rapidapi-host': rapidapiHost,
	// }
}
]

// Функция для получения данных о фильмах
export const getData = (url) => {
    return fetch(url, options[0]).then(resp => resp.json());
};

// export function trimSentences(text, numSentences) {
//     //console.log(text)
//     if (!text) return 0;
//     const sentences = text.match(/[^.!?]+[.!?]+/g);

//     if (!sentences || sentences.length <= numSentences) {
//         return text;
//     }

//     const trimmedSentences = sentences.slice(0, numSentences).join(' ');
//     return trimmedSentences.trim();
// }

export function trimSentences(text, maxLength) {
    if (!text || maxLength <= 0) return '';

    // Разбиваем текст на предложения
    const sentences = text.match(/[^.!?]*[.!?]/g);

    if (!sentences) return text; // Если нет предложений, возвращаем исходный текст

    let trimmedText = '';
    let totalLength = 0;

    for (let sentence of sentences) {
        if (totalLength + sentence.length > maxLength) {
            // Если добавление текущего предложения превысит максимальную длину,
            // обрезаем текст до ближайшего символа окончания предложения.
            trimmedText = trimmedText.trimEnd();
            return trimmedText;
        }

        trimmedText += sentence;
        totalLength += sentence.length;
    }

    return trimmedText.trim();
}


