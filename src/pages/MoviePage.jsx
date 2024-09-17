import Main from "../components/elements/Main/Main.jsx";
import MyList from "../components/elements/MyList/MyList.jsx";
import { useState, useEffect } from 'react'
import { getData, URL_INFO_MOVIE, URL_COVER_MOVIE, URL_ACTORS_MOVIE } from '../server.js'

const Movie_page = ({ movieId }) => {
    const [movieData, setMovieData] = useState([])
    const [movieCover, setMovieCover] = useState('')
    const [movieActors, setMovieActors] = useState([])

    const urlInfoMovie = URL_INFO_MOVIE(movieId)
    const urlCoverMovie = URL_COVER_MOVIE(movieId)
    const urlActorsMovie = URL_ACTORS_MOVIE(movieId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Запрашиваем данные параллельно
                const [data, cover, actors] = await Promise.all([
                    getData(urlInfoMovie),
                    getData(urlCoverMovie),
                    getData(urlActorsMovie)
                ]);
    
                // Устанавливаем состояния
                setMovieData(data);
                setMovieCover(cover.items);
                setMovieActors(actors)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData(); // Вызываем асинхронную функцию
    }, [urlInfoMovie, urlCoverMovie, urlActorsMovie]); // Добавляем оба URL в зависимости
    
    return (
        <>
            <Main movie={movieData} cover={movieCover} actors={movieActors}/>
            <MyList/>
        </>
    );
}

export default Movie_page;