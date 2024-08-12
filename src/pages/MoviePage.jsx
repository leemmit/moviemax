import Header from "../components/elements/Header/Header.jsx";
import Main from "../components/elements/Main/Main.jsx";
import MyList from "../components/elements/MyList/MyList.jsx";
import { DATA } from '../data.js'
import { useState, useEffect } from 'react'
import { getData } from '../server.js'

const Movie_page = ({ movieId }) => {
    const [movieData, setMovieData] = useState([])
    const [movieCover, setMovieCover] = useState('')

    const URL_INFO_MOVIE = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
    const URL_COVER_MOVIE = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}/images?type=STILL&page=1`

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Запрашиваем данные параллельно
                const [data, cover] = await Promise.all([
                    getData(URL_INFO_MOVIE),
                    getData(URL_COVER_MOVIE)
                ]);
    
                // Устанавливаем состояния
                setMovieData(data);
                setMovieCover(cover.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData(); // Вызываем асинхронную функцию
    }, [URL_INFO_MOVIE, URL_COVER_MOVIE]); // Добавляем оба URL в зависимости

    return (
        <>
            <Main movie={movieData} cover={movieCover}/>
            <MyList/>
        </>
    );
}

export default Movie_page;