import { useState } from 'react'
import { DATA } from '../../../data'
import styles from './Main.module.scss'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from '../Main/Information'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'
import Episodes from '../Episodes/Episodes'

const Main = () => {
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
                backgroundImage: `url(${DATA[0].mainImage})`, 
                width: isSidebarShown ? '85%' : '90%',
            }}>
                {activeTab === 1 ? (
                <Information movie={DATA[0]} />
                ) : (activeTab === 2 && <Episodes/>) }
                {/* <Information movie={DATA[0]} /> */}
            </div>
            <BottomNavigation activeTab={activeTab}  setActiveTab={setActiveTab}/>
        </div>
    )
}

export default Main