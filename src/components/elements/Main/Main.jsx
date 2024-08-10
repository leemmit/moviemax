import { useState } from 'react'
import styles from './Main.module.scss'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from './Information/Information'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'
import Episodes from './Episodes/Episodes'

const Main = ({movie}) => {
    const [isSidebarShown, setIsSidebarShown] = useState(false)
    const [activeTab, setActiveTab] = useState(false)
    
    return (
        <div className={styles.wrapper}>
            <Sidebar 
                isSidebarShown={isSidebarShown} 
                setIsSidebarShown={setIsSidebarShown} 
            />
            <div className={styles.main}
            style={{
                backgroundImage: `url(${movie.mainImage})`, 
                width: isSidebarShown ? '90%' : '95%',
            }}>
                {activeTab === 1 ? (
                <Information movie={movie} />
                ) : (activeTab === 2 && <Episodes movie={movie}/>) }
            </div>
            <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    )
}

export default Main