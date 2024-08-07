import styles from './Main.module.scss'


const Information = ({movie}) => {

const addToFavourites = (movieID) => {
    let favourites = localStorage.getItem('favMovies')

    if (favourites) {
        favourites = JSON.parse(favourites)
        localStorage.setItem('favMovies', [...favourites, movieID])
        alert(`${movieID} теперь в избранном!`)
    }
}

// localStorage.getItem('favMovies') для вывода

    return (
        <div className={styles.info}>
            <img src={movie.logo} alt={movie.name} width='200'/>

            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span>{movie.limitAge}</span>
                <span>{movie.rating}</span>
                <span>{movie.duration}</span>
            </div>

            <div className={styles.description}>{movie.description}</div>

            <div className={styles.buttons}>
                <Button cb={() => setModuleShow(true)}> {/* 23:50 */}
                    <i className="bx bx-play"></i>
                    <span>Play</span>
                </Button>
                <Button cb={addToFavourites}>
                    <i className="bx bx-plus"></i>
                    <span>My list</span>
                </Button>
            </div>
        </div>
    );
}

export default Information;