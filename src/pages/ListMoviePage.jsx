import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
import { getUrlKeyword } from "../server";

const ListMoviePage = ({searchValue, onMovieIdChange}) => {
    const searchUrl = `${getUrlKeyword()}?keyword=${encodeURIComponent(searchValue)}&page=1`;
    return (
        <div>
            <MovieContainer url={searchUrl} onMovieIdChange={onMovieIdChange}/> 
        </div>
    );
}

export default ListMoviePage;