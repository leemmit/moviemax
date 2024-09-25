import styles from './MyList.module.scss'
import { DATA } from '../../../data'
//import FlickitySlider from "../../UI/FlickitySlider/FlickitySlider";
import '../../UI/FlickitySlider/flickity.css'
//import Flickity from 'react-flickity-component';


// const flickityOptions = {
//     initialIndex: 2
// }

const MyList = ({list, listTitle}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>{listTitle}</h2>
                <button>
                    <span>See All</span>
                    <i className="bx bx-chevron-right"></i>
                </button>
            </div>

            <div className={styles.listContainer}>
                {!list ? '' : list.map(item => !item.coverUrl ? '' : (
                    <div key={item.kinopoiskId} className={styles.listWrapper}>
                        <div className={styles.listItem}>
                            {/* <div className={styles.bgImg} style={{backgroundImage: `url(${item.coverUrl})`}}></div> */}
                            <img src={item.coverUrl} alt={item.nameRu || item.nameEn || item.nameOriginal} />
                            <span className={styles.name}>{item.nameRu || item.nameEn || item.nameOriginal}</span>
                            <span className={styles.duration}>{
                                !item.filmLength ? '' : 
                                (`${Math.floor(item.filmLength / 60)? Math.floor(item.filmLength / 60) + 'h ' : ''} ${item.filmLength % 60}min` )
                            }</span>
                            {/* <i className='bx bx-play'></i> */}
                        </div>
                        {/* <span>{item.ratingKinopoisk || item.ratingImdb}&#9733;</span> */}
                    </div>
                ))}
                {/* <div className={styles.blockSeeAll}>
                    <i className='bx bx-right-arrow-alt' ></i>
                </div> */}
            </div>
        </div>
    );
}

export default MyList;