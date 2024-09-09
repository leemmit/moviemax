import styles from '../Main.module.scss'

const Details = ({movie, actorsList}) => {
    if (movie) return (
        <div className={styles.details}>
            <div className={styles.about}>
                <img
                    src={movie.logo || movie.logoUrl} 
                    alt={movie.name || movie.nameEn || movie.nameOriginal} 
                    width='200' 
                    style={{opacity: .7, padding: '3rem 0 0 1rem'}}
                />

                <span>Год: {movie.year}</span>
                <span>Страна: {movie.countries?.map(el => el.country)}</span>
                <span>Жанр: {movie.genres?.map(el => el.genre).join(', ')}</span>
                <span>Слоган: {movie.slogan}</span>
                <span>Режиссер: </span>
                <span>Бюджет: </span>
                <span>Сборы: </span>
                <span>Возраст: </span>
                <span>Рейтинг: </span>
                <span>Время: </span>
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