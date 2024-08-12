import styles from '../Main.module.scss'
import Button from '../../../UI/Button/Button'
import { trimSentences } from '../../../../server'


const Information = ({movie}) => {

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

// localStorage.getItem('favMovies') для вывода

// movie.logo и т.д все первые значения можно будет убрать
// если вывод будет нормальным

    return (
        <div className={styles.info}>
            <img 
            src={movie.logo || movie.logoUrl} 
            alt={movie.name || movie.nameEn || movie.nameOriginal} 
            width='200' 
            style={{opacity: .7}}
            />

            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span className={styles.limitAge} >{movie.limitAge || movie.ratingAgeLimits?.slice(3)}+</span>
                <span>{movie.rating || movie.ratingKinopoisk || movie.ratingImdb} &#9733;</span>
                <span>{movie.duration || `${Math.floor(movie.filmLength / 60)}h ${movie.filmLength % 60}min`}</span>
            </div>

            <div className={styles.description}>{trimSentences(movie.description, 3)}</div>

            <div className={styles.buttons}>
                <Button cb={() => setModuleShow(true)}> {/* 23:50 */}
                    <i className="bx bx-play" style={{color: '#c62e21'}}></i>
                    <span>Play</span>
                </Button>
                <Button cb={addToFavourites(movie.id)}>
                    <i className="bx bx-plus"></i>
                    <span>My list</span>
                </Button>
            </div>
        </div>
    );
}

export default Information;