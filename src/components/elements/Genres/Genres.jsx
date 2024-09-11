import styles from './Genres.module.scss'

const Genres = ( {genresList} ) => {
    return (
        <div className={styles.container}>
            {genresList.map(genre => (
                <div 
                className={styles.genrePoster}
                onMouseEnter={(e) => {
                    e.currentTarget.querySelector(`.${styles.bgImg}`).style.transform = 'scale(1.1)';
                  }}
                onMouseLeave={(e) => {
                e.currentTarget.querySelector(`.${styles.bgImg}`).style.transform = 'scale(1.0)';
                }}
                >
                    <div 
                    className={styles.bgImg}
                    style={{backgroundImage: `url(${genre.background[Math.floor(Math.random() * 5)]})  `}}
                    />
                    <h1>{genre.name}</h1>
                </div>
            ))}
        </div>
    );
}

export default Genres;