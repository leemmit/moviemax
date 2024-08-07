import { useState } from 'react'
import { DATA } from '../../../data'
import styles from './Main.module.scss'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from '../Main/Information'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'

const Main = () => {
    const [isSidebarShown, setIsSidebarShown] = useState(false)
    return (
        <div className={styles.wrapper}>
            <Sidebar 
                isSidebarShown={isSidebarShown} 
                setIsSidebarShown={setIsSidebarShown} 
            />
            <div className={styles.main}
            style={{
                backgroundImage: `url(${DATA[0].mainImage})`, 
                width: isSidebarShown ? '70%' : '85%',
            }}
            >
                <Information movie={DATA[0]} />
                <BottomNavigation />
            </div>

        </div>
    )
}

export default Main