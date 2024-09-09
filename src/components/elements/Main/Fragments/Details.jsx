import styles from '../Main.module.scss'

const Details = ({movie, actorsList}) => {
    if (movie) return (
        <div className={styles.details}>
            <div className={styles.about}>
                <img
                    src={movie.logo || movie.logoUrl} 
                    alt={movie.name || movie.nameEn || movie.nameOriginal} 
                    width='200' 
                    style={{opacity: .7, color: '#fff'}}
                />

                <div className={styles.about_info}>
                    <span>Год: {movie.year}</span>
                    <span>Страна: {movie.countries?.map(el => el.country).join(', ')}</span>
                    <span>Жанр: {movie.genres?.map(el => el.genre).join(', ')}</span>
                    <span>Слоган: {movie.slogan}</span>
                    <span>Режиссер: {
                    actorsList
                    .filter(actor => actor.professionKey === 'DIRECTOR')
                    .slice(0, 3)
                    .map(actor => actor.nameRu)
                    .join(', ')
                    }</span>
                    {!(movie.limitAge || movie.ratingAgeLimits) ? '' : (
                    <span className={styles.limitAge} >Возраст: {movie.limitAge || movie.ratingAgeLimits?.slice(3)}+</span>
                    )}
                    <span>Рейтинг: {movie.ratingKinopoisk || movie.ratingImdb}</span>
                    <span>Время: {movie.duration || (
                        `${Math.floor(movie.filmLength / 60)? Math.floor(movie.filmLength / 60) + 'ч ' : ''} ${movie.filmLength % 60}мин`
                    )}</span>
                </div>

                
            </div>
            <div className={styles.actors}>
                {actorsList
                    .filter(actor => actor.professionKey === 'ACTOR')  // Фильтрация актеров
                    .slice(0, 3)  // Обрезаем массив до 3 элементов
                    .map(actor => (
                        <div key={actor.id} className={styles.actor}>
                            <img src={actor.posterUrl} alt={actor.nameEn} />
                            <span>{actor.nameEn}</span>
                        </div>
                        ))
                }
            </div>
        </div>
    );
}

export default Details;