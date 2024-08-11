import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
//import {getMovies, API_URL_POPULAR} from '../server'

const API_URL_KEYWORD = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword'
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1'
//const API_URL_POPULAR = ''


const ListMoviePage = ({searchValue, onMovieIdChange}) => {
    const searchUrl = `${API_URL_KEYWORD}?keyword=${encodeURIComponent(searchValue)}&page=1`;
    //const searchUrl = API_URL_POPULAR
    console.log(searchUrl);
    return (
        <div>
            <MovieContainer url={searchUrl} onMovieIdChange={onMovieIdChange}/> 
        </div>
    );
}

export default ListMoviePage;