import styles from './Search.module.scss'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Search = ({ onSearchChange }) => {
    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        // onSearchChange(newValue); // Передаем новое значение выше по иерархии компонентов
    };

    const handleSearchClick = () => {
        if (value !== ''){
            onSearchChange(value); // Обновляем значение поиска в родительском компоненте
            navigate('/list'); // Переходим на страницу списка фильмов
        }
    };

    const enterSearch = (event) => {
        if (event.key === 'Enter') handleSearchClick();
    }

    return (
        <div className={styles.search}>
            <div>
                <button onClick={handleSearchClick}>
                    <i className='bx bx-search-alt'></i>
                </button>
                <input 
                type="text" 
                placeholder='I`m searching for...'
                onChange={handleInputChange}
                onKeyDown={enterSearch}
                value={value}
                />
            </div>
            <i className='bx bx-filter'></i>
        </div>
    )
}

export default Search