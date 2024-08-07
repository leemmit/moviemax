import styles from './Sidebar.module.scss'

const menu = [
    'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({isSidebarShown, setIsSidebarShown}) => {
    return (
        <div className={styles.sidebar} style={{ width: isSidebarShown ? '30%' : '15%' }} >
            <button onClick={() => setIsSidebarShown(true)}>
                <i className={`bx bx-${isSidebarShown ? 'x' : 'border-left'}`}></i>
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