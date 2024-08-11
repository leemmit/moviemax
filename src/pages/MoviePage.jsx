import Header from "../components/elements/Header/Header.jsx";
import Main from "../components/elements/Main/Main.jsx";
import MyList from "../components/elements/MyList/MyList.jsx";
import { DATA } from '../data.js'

const Movie_page = ({ movieId }) => {
    const API_URL_MOVIE = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`
    return (
        <>
            <Main movie={API_URL_MOVIE}/>
            <MyList/>
        </>
    );
}

export default Movie_page;