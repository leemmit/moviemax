import styles from './Genres.module.scss'

const Genres = ( {genresList} ) => {
    return (
        <div className={styles.container}>
            {genresList.map(genre => (
                <div 
                className={styles.genrePoster}
                style={{backgroundImage: `url(${genre.background[Math.floor(Math.random() * 5)]})  `}}
                >
                    <span>{genre.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Genres;