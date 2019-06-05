import 	React from 'react';
import 	{NavLink} from 'react-router-dom'
import style from './Nav.module.css';
function Navigation() {
  return (
    <div >
     
      	 	<ul className={style.nav}>
      	 		<li className={style.navlist} ><NavLink to="/" activeClassName={style.isActive} exact>Home</NavLink></li>
      	 		<li className={style.navlist} ><NavLink to="/About" activeClassName={style.isActive}>About</NavLink></li>
      	 		<li className={style.navlist} ><NavLink to="/Contact" activeClassName={style.isActive}>Contact</NavLink></li>
      	 	</ul>
    </div>
  );
}

export default Navigation;