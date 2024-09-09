import Main from "../components/elements/Main/Main.jsx";
import MyList from "../components/elements/MyList/MyList.jsx";
import { useState, useEffect } from 'react'
import { getData } from '../server.js'

const Movie_page = ({ movieId }) => {
    const [movieData, setMovieData] = useState([])
    const [movieCover, setMovieCover] = useState('')
    const [movieActors, setMovieActors] = useState([])

    const URL_INFO_MOVIE = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
    const URL_COVER_MOVIE = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=STILL&page=1`
    const URL_ACTORS_MOVIE = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movieId}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Запрашиваем данные параллельно
                const [data, cover, actors] = await Promise.all([
                    getData(URL_INFO_MOVIE),
                    getData(URL_COVER_MOVIE),
                    getData(URL_ACTORS_MOVIE)
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
    }, [URL_INFO_MOVIE, URL_COVER_MOVIE, URL_ACTORS_MOVIE]); // Добавляем оба URL в зависимости
    console.log(movieData)
    console.log(movieCover)
    return (
        <>
            <Main movie={movieData} cover={movieCover} actors={movieActors}/>
            <MyList/>
        </>
    );
}

export default Movie_page;