import Search from "../../UI/Search/Search"
import styles from "./Header.module.scss"
import Profile from "./Profile"
import logo from "../../../images/OVIEMAX.png"
import { Link } from 'react-router-dom';

const Header = ({ onSearchChange }) => {
    return (
        <div className={styles.header}>
            <div>
                <Link to="/">
                    <img 
                    //src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                    src={logo}
                    alt="MovieMax"
                    height='35'
                    width='150' 
                    />
                </Link>
                <Search onSearchChange={onSearchChange} />
            </div>
            <Profile/>
        </div>
    )
}

export default Header