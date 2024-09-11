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
            'https://avatars.dzeninfra.ru/get-zen_doc/1581245/pub_5d68e5d11e8e3f00ac7ae7ba_5d68ea2dd11ba200add9c479/scale_1200',
            'https://img2.wtftime.ru/store/2014/02/16/wanC06wX.jpg',
            'https://i.pinimg.com/originals/a5/b8/d3/a5b8d3a2904afbfbb5810b2207e63726.jpg',
            'https://img.gazeta.ru/files3/403/13170403/upload-06-pic905-895x505-67034.jpg',
            'https://i.pinimg.com/736x/98/84/0e/98840ef1139cefc8af5860aaf473ea84.jpg',
        ]    },
    {
        name: 'Sci-Fi',
        background: [
            'https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/8/4/9/8322948/764be284ffa41ba55776eedada5fa6df.jpeg',
            'https://avatars.mds.yandex.net/i?id=e8599e67b50f74cfdb998721c54c3c95_l-5235802-images-thumbs&n=13',
            'https://i.pinimg.com/originals/65/5f/4e/655f4e16b59739fa311618b2821d2a12.jpg',
            'https://avatars.mds.yandex.net/i?id=29621a13da9ccd845e7e88fd3af119da_l-9173887-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8b33a3d7-6487-42c0-a023-9fce4c5a99db/1920x'
        ]    },
    {
        name: 'Fantasy',
        background: [
            'https://avatars.mds.yandex.net/i?id=02159bbe238cdbb7c826f2450f8b7976_l-5370628-images-thumbs&n=13',
            'https://www.kino-teatr.ru/movie/kadr/24153/186996.jpg',
            'https://avatars.mds.yandex.net/i?id=97bcbfc67b83d543b7cbaad356442362_l-3979623-images-thumbs&n=13',
            'https://i.pinimg.com/originals/d4/9d/6d/d49d6d42f4c777ba04eddf26315731d6.jpg',
            'https://avatars.mds.yandex.net/i?id=91bcc16c8d25904b6f3f1b25503505d9_l-10350639-images-thumbs&n=13',
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