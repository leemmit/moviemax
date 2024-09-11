import MovieContainer from "../components/elements/MovieContainer/MovieContainer";
import { kinopoiskUrlPopular } from "../server";
import Genres from "../components/elements/Genres/Genres";

const genresList = [
    {
        name: 'Animation',
        background: [
            'https://sgsonfilm.net/wp-content/uploads/2019/06/toy-story.jpg',
            'https://dailynexus.s3-us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2015/07/1422842928997.jpeg',
            'https://preview.redd.it/i-put-every-frame-from-zootopia-on-top-of-each-other-in-no-v0-yuuhxuw7mszb1.jpg?auto=webp&s=e6ae9d675f0ac1cbbd2eabe30365d5956ff66dcd',
            'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9abfcf53-1101-40b1-aca0-4289e24fa576/1920x',
            'https://lastfm.freetls.fastly.net/i/u/ar0/0fb99e447c21bc2d7c0426528949ea86.png',
        ]
    },
    {
        name: 'Action',
        background: [
            'https://sgsonfilm.net/wp-content/uploads/2019/06/toy-story.jpg',
            'https://dailynexus.s3-us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2015/07/1422842928997.jpeg',
            'https://preview.redd.it/i-put-every-frame-from-zootopia-on-top-of-each-other-in-no-v0-yuuhxuw7mszb1.jpg?auto=webp&s=e6ae9d675f0ac1cbbd2eabe30365d5956ff66dcd',
            'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9abfcf53-1101-40b1-aca0-4289e24fa576/1920x',
            'https://lastfm.freetls.fastly.net/i/u/ar0/0fb99e447c21bc2d7c0426528949ea86.png',
        ]    },
    {
        name: 'Sci-Fi',
        background: [
            'https://sgsonfilm.net/wp-content/uploads/2019/06/toy-story.jpg',
            'https://dailynexus.s3-us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2015/07/1422842928997.jpeg',
            'https://preview.redd.it/i-put-every-frame-from-zootopia-on-top-of-each-other-in-no-v0-yuuhxuw7mszb1.jpg?auto=webp&s=e6ae9d675f0ac1cbbd2eabe30365d5956ff66dcd',
            'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9abfcf53-1101-40b1-aca0-4289e24fa576/1920x',
            'https://lastfm.freetls.fastly.net/i/u/ar0/0fb99e447c21bc2d7c0426528949ea86.png',
        ]    },
    {
        name: 'Fantasy',
        background: [
            'https://sgsonfilm.net/wp-content/uploads/2019/06/toy-story.jpg',
            'https://dailynexus.s3-us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2015/07/1422842928997.jpeg',
            'https://preview.redd.it/i-put-every-frame-from-zootopia-on-top-of-each-other-in-no-v0-yuuhxuw7mszb1.jpg?auto=webp&s=e6ae9d675f0ac1cbbd2eabe30365d5956ff66dcd',
            'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9abfcf53-1101-40b1-aca0-4289e24fa576/1920x',
            'https://lastfm.freetls.fastly.net/i/u/ar0/0fb99e447c21bc2d7c0426528949ea86.png',
        ]    },
]

const HomePage = ({ onMovieIdChange }) => {
    return (
        <div>
            {/* <MovieContainer url={kinopoiskUrlPopular} onMovieIdChange={onMovieIdChange} useStyleL={true}/> */}
            <Genres genresList={genresList} />
        </div>
    );
}

export default HomePage; 