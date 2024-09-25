const rapidapiKey = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidapiHost = process.env.REACT_APP_RAPIDAPI_HOST;

const kinopoiskKey = process.env.REACT_APP_KINOPOISK_KEY;
export const kinopoiskUrlPopular = process.env.REACT_APP_KINOPOISK_URL_POPULAR;
export const kinopoiskUrlKeyword = process.env.REACT_APP_KINOPOISK_URL_KEYWORD;
export const kinopoiskUrlClosesReleases = process.env.REACT_APP_KINOPOISK_URL_CLOSES_RELEASES;
export const url404 = process.env.REACT_APP_URL_404;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const now = new Date();

export const URL_INFO_MOVIE = (movieId) => `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
export const URL_COVER_MOVIE = (movieId) => `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=STILL&page=1`
export const URL_ACTORS_MOVIE = (movieId) => `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`
export const URL_PREMIERES_MOVIE = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${now.getFullYear()}&month=${months[now.getMonth()-1].toUpperCase()}`
export const URL_PREMIERE_NOW = process.env.REACT_APP_KINOPOISK_URL_POPULAR_NOW;

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

export const fetchMoviesData = async (url) => {
    try {
        const data = await getData(url);
        data = data.then(result => JSON.stringify(result))
        return data;
        
    } catch (error) {
        console.error('Error fetching movies ', error);
    }
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
    console.log('sentences: ' + sentences)

    if (!sentences || sentences.length === 1) return text; // Если нет предложений, возвращаем исходный текст

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

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


