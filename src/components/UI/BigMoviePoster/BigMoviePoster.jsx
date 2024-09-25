import styles from './BigMoviePoster.module.scss'
import Button from '../Button/Button';
import { url404, getData, fetchMoviesData } from '../../../server';
import { useState } from 'react';

const BigMoviePoster = ({movie, cover}) => {

        //           Favourites
    const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favMovies')) || []);
    const addToFavourites = (movie) => {
        setFavourites(prev => 
            isInFavourites(movie, prev) 
                ? prev 
                : [...prev, movie]
        );
    };

    const isInFavourites = (movie, list) => {
        return list.some(fav => fav.kinopoiskId === movie.kinopoiskId);
    };

    return (
        <div className={styles.container}>
            {/* <div 
            className={styles.image}
            style={{backgroundImage: `url(${cover?.[0]?.imageUrl || cover?.[1]?.imageUrl || url404})` }}
            /> */}
            <img src={cover?.[0]?.imageUrl || cover?.[1]?.imageUrl || url404} alt="" />
            {!movie ? '' : (
                <div className={styles.content}>
                <h1>{movie.nameRu || movie.nameEn || movie.nameOriginal}</h1>
                <div className={styles.buttons}>
                    <Button >
                        <i className={'bx bx-play'} style={{color: '#c62e21'}}></i>
                        <span>Play</span>
                    </Button>
                    <Button 
                    cb={() => addToFavourites(movie)}
                    className={isInFavourites(movie, favourites) ? styles.active : ''}
                    style={{background: '#fff !important'}}
                    >
                        <i className={isInFavourites(movie, favourites) ? 'bx bx-check' : 'bx bx-plus'}></i>
                        <span>My list</span>
                    </Button>
                </div>
            </div>
            )}
        </div>
    );
}

export default BigMoviePoster;