import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
import { getUrlPopular } from "../server";

const HomePage = ({ onMovieIdChange }) => {
    return (
        <div>
            <MovieContainer url={getUrlPopular()} onMovieIdChange={onMovieIdChange} useStyleL={true}/>
        </div>
    );
}

export default HomePage; 