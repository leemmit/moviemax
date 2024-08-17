import styles from '../Main.module.scss'
import Button from '../../../UI/Button/Button'
import { trimSentences } from '../../../../server'
import { useState } from 'react'

const links = ['https://www.sspoisk/film/', 'https://www.ggpoisk/film/', 'https://www.kinopoisk.cx/film/', 'https://www.kinopoisk.vip/film/']


const Information = ({movie}) => {
    const [linksShown, setLinksShown] = useState(false);

    const addToFavourites = (movieID) => {
        let favourites = localStorage.getItem('favMovies')
        console.log(favourites);

        if (favourites) {
            favourites = JSON.parse(favourites)
            localStorage.setItem('favMovies', [...favourites, movieID])
            alert(`${movieID} теперь в избранном!`)
        }
    }

    const setModuleShow = (par) => {
        if (par) {
            console.log('video is opened')
        }
    }
    console.log(movie)

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
            {/* <div className={styles.description}>{movie.description}</div> */}

            <div className={styles.buttons}>
                <Button cb={() => setLinksShown(!linksShown)}> {/* 23:50 */}
                    <i 
                    className={linksShown ? 'bx bx-x' : 'bx bx-play'} 
                    style={{color: '#c62e21'}}
                    ></i>
                    <span>{linksShown ? 'Close' : 'Play'}</span>
                    <i 
                    className={linksShown ? 'bx bx-x' : ''} 
                    style={{color: '#c62e21'}}
                    ></i>
                </Button>
                <Button cb={addToFavourites(movie.id)}>
                    <i className="bx bx-plus"></i>
                    <span>My list</span>
                </Button>
            </div>

            <div className={linksShown ? styles.links : styles.hidden}>
                {links.map(link => (
                    <a href={link + movie.kinopoiskId}>{link + movie.kinopoiskId}</a>
                ))}
            </div>
        </div>
    );
}

export default Information;