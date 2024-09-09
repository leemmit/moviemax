import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
import { kinopoiskUrlPopular } from "../server";

const HomePage = ({ onMovieIdChange }) => {
    return (
        <div>
            <MovieContainer url={kinopoiskUrlPopular} onMovieIdChange={onMovieIdChange} useStyleL={true}/>
        </div>
    );
}

export default HomePage; 