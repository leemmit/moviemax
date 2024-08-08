import styles from './MyList.module.scss'
import { DATA } from '../../../data'

//let list = localStorage.getItem('favMovies')
let list = [1, 2, 3, 4];

const MyList = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>My list</h2>
                <div>
                    <button>
                        <span>See All</span>
                        <i class="bx bx-chevron-right"></i>
                    </button>
                </div>
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
            </div>
        </div>
    );
}

export default MyList;