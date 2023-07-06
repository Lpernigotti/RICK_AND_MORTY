import SearchBar from './/SearchBar.jsx';
import style from './Nav.module.css'
import {NavLink} from 'react-router-dom'
const Nav = ({onSearch}) => {
    return(
       <nav className={style.nav}>
     <SearchBar onSearch={onSearch}/> 
     <button className={style.about}>
      <NavLink to = '/about' className={style.navLink}>About</NavLink>
     </button>
     <button className={style.home}>
      <NavLink to = '/home' className={style.navLink}>Home</NavLink>
      </button>   
      <button className={style.favorites}>
        <NavLink to= '/favorites' className={style.navLink}>Favorites</NavLink>
      </button>
      <button  className={style.home}>
        <NavLink to= '/ ' className={style.navLink}>LOGOUT</NavLink>
      </button>
       </nav>

    )
} 
export default Nav