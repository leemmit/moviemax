import styles from './Sidebar.module.scss'

const menu = [
    'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({isSidebarShown, setIsSidebarShown}) => {
    return (
        <div className={styles.sidebar} style={{ width: isSidebarShown ? '15%' : '10%' }} >
            <button onClick={() => setIsSidebarShown(!isSidebarShown)}>
                <i className={`bx bx-${isSidebarShown ? 'x' : 'menu'}`}></i>
            </button>
            <ul className={isSidebarShown ? styles.show : ''} >
                {menu.map(title => (
                    <li key={title} >
                        <a href={title}>{title}</a>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default Sidebar;