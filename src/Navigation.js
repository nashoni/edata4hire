import 	React from 'react';
import 	{NavLink} from 'react-router-dom'
import style from './Nav.module.css';
function Navigation() {
  return (
    <div >
	<nav>
	<ul className={style.nav}>
{/*      	 		<li className={style.navlist} ><NavLink to="/" activeClassName={style.isActive} exact>Home</NavLink></li>
*/}      	 	<li exact className={style.navlist} ><NavLink to="/" activeClassName={style.isActive} exact>Home</NavLink></li>
      	 		<li className={style.navlist} ><NavLink to="/About" activeClassName={style.isActive}>About</NavLink></li>
      	 		<li className={style.navlist} ><NavLink to="/Contact" activeClassName={style.isActive}>Contact</NavLink></li>

				   <li className={style.navlist} ><button>sign up </button></li>
      	 		<li className={style.navlist} > <button>signin </button></li>

      	 	</ul>
	</nav>
      	 	
    </div>
  );
}

export default Navigation;