import styles from './MovieContainer.module.scss'
import { useState, useEffect } from 'react'
import { getMovies } from '../../../server'

const MovieContainer = ({url}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Создаем асинхронную функцию внутри useEffect
        const fetchMovies = async () => {
            const data = await getMovies(url);
            setMovies(data.items); // Сохраняем массив фильмов в состоянии
        };

        fetchMovies(); // Вызываем асинхронную функцию
    }, [url]); // Добавляем url в зависимости, чтобы обновлять данные при изменении URL


    return (
        <div className={styles.movies}>
            {!movies ? [] : movies.map((movie) => (
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