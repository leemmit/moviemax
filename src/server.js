const API_KEY = '1e279e5c-06e0-48be-961d-c42909f95716'
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1'

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    console.log(respData)
    showMovies(respData);    
}

function showMovies(data) {
    const moviesEl = document.querySelector(".movies");

    data.films.forEach(movie => {
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div className=${styles.movie_wrapper}>
            <img src=${movie.posterUrlPreview} alt=${movie.nameRu} />
            <div className=${styles.movie_info}>
                <span className=${styles.movie_title}>${movie.nameRu}</span>
                <span className=${styles.movie_category}>${movie.genres.map(
                    genre => genre.genre
                )}</span>
                <span className=${styles.movie_rating}>${movie.ratingKinopoisk}</span>
            </div>
        </div>
        `;
        moviesEl.appendChild(movieEl)
    })
}


