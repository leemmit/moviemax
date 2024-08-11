import { DATA } from '../../../../data'
import styles from './Episodes.module.scss'
import '../../../UI/FlickitySlider/flickity.css'
import Flickity from 'react-flickity-component';

let list = [1, 2, 3, 4];
const flickityOptions = {
    initialIndex: 2
}

const Episodes = ({movie}) => {
    return (
        <div className={styles.wrapper}>
            <img src={movie.logo} alt={movie.name} width='200' style={{opacity: .7}}/>
            <div className={styles.title}>
                <label htmlFor="">
                    <select name="" id="">
                        <option value="fruit">Fruit</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
                    </select>
                </label>
                
                <button>
                    <span>See All</span>
                    <i className="bx bx-chevron-right"></i>
                </button>
            </div>

            

            <Flickity
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
            </Flickity>
        </div>
    );
}

export default Episodes;