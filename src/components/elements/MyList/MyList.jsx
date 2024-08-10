import styles from './MyList.module.scss'
import { DATA } from '../../../data'
//import FlickitySlider from "../../UI/FlickitySlider/FlickitySlider";
import '../../UI/FlickitySlider/flickity.css'
//import Flickity from 'react-flickity-component';

//let list = localStorage.getItem('favMovies')
let list = [1, 2, 3, 4];
// const flickityOptions = {
//     initialIndex: 2
// }

const MyList = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>My list</h2>
                <button>
                    <span>See All</span>
                    <i class="bx bx-chevron-right"></i>
                </button>
            </div>

            <div className={styles.listContainer}>
                {!list ? '' : list.map(iD => (
                    <div className={styles.listWrapper}>
                        <div className={styles.listItem}>
                            <img src={DATA.find(item => item.id === iD).mainImage} alt={DATA.find(item => item.id === iD).name} />
                            <span className={styles.duration}>{DATA.find(item => item.id === iD).duration}</span>
                            <i class='bx bx-play'></i>
                        </div>
                        <span className={styles.name}>{DATA.find(item => item.id === iD).name} {DATA.find(item => item.id === iD).rating}&#9733;</span>
                    </div>
                ))}
                <div className={styles.blockSeeAll}>
                    <i class='bx bx-right-arrow-alt' ></i>
                </div>
            </div>



            {/* <Flickity
            className='slider'
            elementType='div'
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static
            >
                {!list ? '' : list.map(iD => (
                    <div className={styles.item}>
                        <div className={styles.slide} style={{
                            backgroundImage: `url(${DATA.find(item => item.id === iD).mainImage})`,
                            aspectRatio: 16/9,
                            width: 250,
                            margin: '0 10px',
                            backgroundSize: 'cover',
                        }}
                        ></div>
                    </div>
                ))}
            </Flickity> */}
        </div>
    );
}

export default MyList;