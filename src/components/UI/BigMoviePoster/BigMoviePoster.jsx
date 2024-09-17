import styles from './BigMoviePoster.module.scss'
import Button from '../Button/Button';
import { url404 } from '../../../server';

const BigMoviePoster = ({movie, cover}) => {
    return (
        <div className={styles.container}>
            <div 
            className={styles.image}
            style={{backgroundImage: `url(${cover?.[0]?.imageUrl || cover?.[1]?.imageUrl || url404})` }}
            />
            {!movie ? '' : (
                <div className={styles.content}>
                <h1>{movie.nameRu || movie.nameEn || movie.nameOriginal}</h1>
                <div className={styles.buttons}>
                    <Button >
                        
                    </Button>
                    <Button >
                    
                    </Button>
                </div>
            </div>
            )}
        </div>
    );
}

export default BigMoviePoster;