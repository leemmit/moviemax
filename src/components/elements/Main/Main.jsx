import { useState, useEffect} from 'react'
import styles from './Main.module.scss'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from './Fragments/Information'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'
import Episodes from './Fragments/Episodes'
import Details from './Fragments/Details'

const tabs = [
    {
        _id: 1,
        name: 'Overview',
    },
    {
        _id: 2,
        name: 'Episodes',
    },
    {
        _id: 3,
        name: 'Details',
    },
]

const Main = ({movie, cover}) => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    //const [activeTab, setActiveTab] = useState(1)

    const [activeTab, setActiveTab] = useState(() => {
        return Number(localStorage.getItem('activeTab')) || 1;
    });

    useEffect(() => {
        // Сохраняем активную вкладку в localStorage при каждом её изменении
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);
    
    return (
        <div className={styles.wrapper}>
            <Sidebar 
                isSidebarShown={isSidebarShown} 
                setIsSidebarShown={setIsSidebarShown} 
            />
            <div className={styles.fragments}
            style={{
                backgroundImage: `url(${cover?.[1]?.imageUrl || cover?.[0]?.imageUrl || 'https://avatars.mds.yandex.net/i?id=585c6a06626f35894b355ca4f30b4e79_l-5235574-images-thumbs&n=13'})`, 
                backgroundPosition: 'center',
                width: isSidebarShown ? '90%' : '95%',
            }}>
                <img
                src={movie.logo || movie.logoUrl} 
                alt={movie.name || movie.nameEn || movie.nameOriginal} 
                width='200' 
                style={{opacity: .7}}
                />
                {activeTab === 1 ? ( <Information movie={movie} />) 
                : (activeTab === 2 ? <Episodes movie={movie}/> : <Details movie={movie}/>) }
            </div>
            <BottomNavigation 
            tabs={movie.type === 'TV_SERIES' ? tabs : tabs.filter(tab => tab.name !== 'Episodes')} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            />
        </div>
    )
}

export default Main