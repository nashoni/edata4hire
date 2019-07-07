import React from 'react';

import style from  './Header.module.css';
function Header() {
  return (
    <div >
    
      <header className={style.heading}>
      	<div className={style.headcontent}>
      		<h2> eData4Hire </h2>
      		<p>data speaks</p>
      		
      	</div>
      </header>
    </div>
  );
}

export default Header;
