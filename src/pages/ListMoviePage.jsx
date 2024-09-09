import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
import { kinopoiskUrlKeyword } from "../server";

const ListMoviePage = ({searchValue, onMovieIdChange}) => {
    const searchUrl = `${kinopoiskUrlKeyword}?keyword=${encodeURIComponent(searchValue)}&page=1`;
    
    return (
        <div>
            <MovieContainer url={searchUrl} onMovieIdChange={onMovieIdChange}/> 
        </div>
    );
}

export default ListMoviePage;