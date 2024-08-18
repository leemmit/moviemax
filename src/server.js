const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1'
const API_KEY = '1e279e5c-06e0-48be-961d-c42909f95716'
const URL_404 = 'https://avatars.mds.yandex.net/i?id=585c6a06626f35894b355ca4f30b4e79_l-5235574-images-thumbs&n=13'

export const getURL404 = () => URL_404

// Функция для получения данных о фильмах
export const getData = (url) => {
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    }).then(resp => resp.json());
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



// function showMovies(data) {
//     const moviesEl = document.querySelector(".movies");

//     data.films.forEach(movie => {
//         const movieEl = document.createElement("div")
//         movieEl.classList.add("movie");
//         movieEl.innerHTML = `
//         <div className=${styles.movie_wrapper}>
//             <img src=${movie.posterUrlPreview} alt=${movie.nameRu} />
//             <div className=${styles.movie_info}>
//                 <span className=${styles.movie_title}>${movie.nameRu}</span>
//                 <span className=${styles.movie_category}>${movie.genres.map(
//                     genre => genre.genre
//                 )}</span>
//                 <span className=${styles.movie_rating}>${movie.ratingKinopoisk}</span>
//             </div>
//         </div>
//         `;
//         moviesEl.appendChild(movieEl)
//     })
// }


