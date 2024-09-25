import Search from "../../UI/Search/Search"
import styles from "./Header.module.scss"
import Profile from "./Profile"
import logo from "../../../images/OVIEMAX.png"

const Header = ({ onSearchChange }) => {
    return (
        <div className={styles.header}>
            <div>
                <a href="/">
                    <img 
                    //src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                    src={logo}
                    alt="MovieMax"
                    height='35'
                    width='150' 
                    />
                </a>
                <Search onSearchChange={onSearchChange} />
            </div>
            <Profile/>
        </div>
    )
}

export default Header