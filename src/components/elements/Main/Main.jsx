import { useState, useEffect} from 'react'
import styles from './Main.module.scss'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from './Fragments/Information'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'
import Episodes from './Fragments/Episodes'
import Details from './Fragments/Details'
import { getURL404, url404 } from '../../../server'
//import Movie404 from '../../UI/Movie404/Movie404'

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

    //           MOVIE
    const [currentMovie, setCurrentMovie] = useState(() => {
        return JSON.parse(localStorage.getItem('currentMovie')) || 1;
    });
    
    useEffect(() => {
        if (movie !== null) {
            setCurrentMovie(movie);
        }
    }, [movie]);
    
    useEffect(() => {
        if (movie !== null) {
            localStorage.setItem('currentMovie', JSON.stringify(movie));
        }
    }, [currentMovie]);
    
    //          ACTIVE TAB
    const [activeTab, setActiveTab] = useState(() => {
        return Number(localStorage.getItem('activeTab')) || 1;
    });
    
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);
    

    // const [activeTab, setActiveTab] = useState(() => {
    //     return Number(localStorage.getItem('activeTab')) || 1;
    // });

    // useEffect(() => {
    //     // Сохраняем активную вкладку в localStorage при каждом её изменении
    //     localStorage.setItem('activeTab', activeTab);
    // }, [activeTab]);
    
    return (
        <div className={styles.wrapper}>
            <Sidebar 
                isSidebarShown={isSidebarShown} 
                setIsSidebarShown={setIsSidebarShown} 
            />
            <div className={styles.fragments}
            style={{
                backgroundImage: `url(${cover?.[1]?.imageUrl || cover?.[0]?.imageUrl || url404})`, 
                backgroundPosition: 'center',
                width: isSidebarShown ? '90%' : '95%',
            }}>
                <img
                src={currentMovie.logo || currentMovie.logoUrl} 
                alt={currentMovie.name || currentMovie.nameEn || currentMovie.nameOriginal} 
                width='200' 
                style={{opacity: .7}}
                />
                {activeTab === 1 ? ( <Information movie={currentMovie} />) 
                : (activeTab === 2 ? <Episodes movie={currentMovie}/> : <Details movie={currentMovie}/>) }
            </div>
            <BottomNavigation 
            tabs={currentMovie.type === 'TV_SERIES' ? tabs : tabs.filter(tab => tab.name !== 'Episodes')} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            />
        </div>
    )
}

export default Main