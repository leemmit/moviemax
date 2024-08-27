import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
import { apiUrlPopular } from "../server";

const HomePage = ({ onMovieIdChange }) => {
    return (
        <div>
            <MovieContainer url={apiUrlPopular} onMovieIdChange={onMovieIdChange} useStyleL={true}/>
        </div>
    );
}

export default HomePage; 