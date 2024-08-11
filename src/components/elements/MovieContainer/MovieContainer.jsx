import styles from './MovieContainer.module.scss'
import { useState, useEffect } from 'react'

const API_KEY = '1e279e5c-06e0-48be-961d-c42909f95716'
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1'

const MovieContainer = () => {
    const [movies, setMovies] = useState([]);

    // Функция для получения данных о фильмах
    const getMovies = async (url) => {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        });
        const respData = await resp.json();
        setMovies(respData.items); // Сохраняем массив фильмов в состоянии
    };

    useEffect(() => {
        getMovies(API_URL_POPULAR);
    }, []);

    return (
        <div className={styles.movies}>
            {movies.map((movie) => (
                <div key={movie.kinopoiskId} className={styles.movie}>
                    <div className={styles.movie_wrapper}>
                        <img
                            src={movie.posterUrlPreview}
                            alt={movie.nameRu || movie.nameOriginal}
                        />
                        <div className={styles.movie_info}>
                            <span className={styles.movie_title}>
                                {movie.nameRu || movie.nameOriginal}
                            </span>
                            <span className={styles.movie_category}>
                                {movie.genres.map(genre => genre.genre).join(', ')}
                            </span>
                            <span className={styles.movie_rating}>
                                {movie.ratingKinopoisk || movie.ratingImdb}
                            </span>
                            <span className={styles.movie_year}>
                                {movie.year}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieContainer;