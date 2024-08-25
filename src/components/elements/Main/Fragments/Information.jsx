import styles from '../Main.module.scss'
import Button from '../../../UI/Button/Button'
import { trimSentences } from '../../../../server'
import { useState, useEffect } from 'react'

const links = ['https://www.sspoisk/film/', 'https://www.ggpoisk/film/', 'https://www.kinopoisk.cx/film/', 'https://www.kinopoisk.vip/film/']


const Information = ({movie}) => {
    const [linksShown, setLinksShown] = useState(false);

    const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favMovies')) || []);

    useEffect(() => {
        localStorage.setItem('favMovies', JSON.stringify(favourites));
    }, [favourites]);

    const isInFavourites = (movie, list) => {
        return list.some(fav => fav.kinopoiskId === movie.kinopoiskId);
    };

    const addToFavourites = (movie) => {
        setFavourites(prev => 
            isInFavourites(movie, prev) 
                ? prev 
                : [...prev, movie]
        );
    };

    // const [favourites, setFavourites] = useState(() => {
    //     return JSON.parse(localStorage.getItem('favourites')) || [];
    // });

    // useEffect(() => {
    //     localStorage.setItem('favourites', JSON.stringify(favourites));
    // }, [favourites]);

    // const addToFavourites = (movie) => {
    //     let favourites = localStorage.getItem('favMovies');
    
    //     if (favourites) {
    //         favourites = JSON.parse(favourites); // Парсим строку JSON в массив
    //         favourites.push(movie); // Добавляем новый фильм в массив
    //         localStorage.setItem('favMovies', JSON.stringify(favourites)); // Сохраняем обновленный массив как строку JSON
    //     } else {
    //         // Если в избранных еще нет фильмов, создаем новый массив с одним фильмом и сохраняем его
    //         localStorage.setItem('favMovies', JSON.stringify([movie]));
    //     }
    
    //     alert(`${movie.nameRu || movie.nameEn || movie.nameOriginal} теперь в избранном!`);
    // };
    

// localStorage.getItem('favMovies') для вывода

// movie.logo и т.д все первые значения можно будет убрать
// если вывод будет нормальным

    return (
        <div className={styles.info}>

            <div className={styles.additional}>
                <span>{movie.year}</span>
                {!(movie.limitAge || movie.ratingAgeLimits) ? '' : (
                <span className={styles.limitAge} >{movie.limitAge || movie.ratingAgeLimits?.slice(3)}+</span>
                )}
                <span>{movie.rating || movie.ratingKinopoisk || movie.ratingImdb} &#9733;</span>
                <span>{movie.duration || (
                    `${Math.floor(movie.filmLength / 60)? Math.floor(movie.filmLength / 60) + 'h ' : ''} ${movie.filmLength % 60}min`
                )}</span>
            </div>

            <div className={!linksShown ? styles.description : styles.transparent}>{trimSentences(movie.description, 2)}</div>

            <div className={styles.buttons}>
                <Button cb={() => setLinksShown(!linksShown)}> {/* 23:50 */}
                    <i className={linksShown ? 'bx bx-x' : 'bx bx-play'} style={{color: '#c62e21'}}></i>
                    <span>{linksShown ? 'Close' : 'Play'}</span>
                    <i className={linksShown ? 'bx bx-x' : ''} style={{color: '#c62e21'}}></i>
                </Button>
                <Button 
                cb={() => addToFavourites(movie)}
                className={isInFavourites(movie, favourites) ? styles.active : ''}
                style={{background: '#fff !important'}}
                >
                {/* <Button> */}
                    <i className={isInFavourites(movie, favourites) ? 'bx bx-check' : 'bx bx-plus'}></i>
                    <span>My list</span>
                </Button>
            </div>

            <div className={linksShown ? styles.links : styles.hidden}>
                {links.map(link => (
                    <a target="_blank" href={link + movie.kinopoiskId}>{link + movie.kinopoiskId}</a>
                ))}
            </div>
        </div>
    );
}

export default Information;