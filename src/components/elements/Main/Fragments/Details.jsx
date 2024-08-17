import styles from '../Main.module.scss'

const Details = ({movie}) => {
    return (
        <div className={styles.details}>
            <span>Country: </span>
            <span>Genre: </span>
            
        </div>
    );
}

export default Details;