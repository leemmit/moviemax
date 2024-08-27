import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
import { apiUrlKeyword } from "../server";

const ListMoviePage = ({searchValue, onMovieIdChange}) => {
    const searchUrl = `${apiUrlKeyword}?keyword=${encodeURIComponent(searchValue)}&page=1`;
    return (
        <div>
            <MovieContainer url={searchUrl} onMovieIdChange={onMovieIdChange}/> 
        </div>
    );
}

export default ListMoviePage;