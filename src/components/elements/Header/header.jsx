import Search from "../../UI/Search/Search"
import styles from "./Header.module.scss"
import Profile from "./Profile"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../../../pages/HomePage";
import NotificationPage from "../../../pages/NotificationPage";

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <a href="/home">
                    <img 
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                    alt="Netflix"
                    height='35'
                    width='112' 
                    />
                </a>
                <Search/>
            </div>
            <Profile/>


            <Router>
                <Routes>
                    <Route exact path="/home" Component={HomePage} />
                    <Route exact path="/notification" Component={NotificationPage} />
                </Routes>
            </Router>
        </div>
    )
}

export default Header