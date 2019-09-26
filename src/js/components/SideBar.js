import React from 'react';
import NavLinks from './NavLinks';
const closeSidebar = ()=>{
    const sideBar = document.getElementsByClassName('sidebar');
    sideBar[0].style.width='0';
    const closeBtn = document.getElementsByClassName('sidebar__close');
    closeBtn[0].style.display='none';
}
const SideBar = () => {
    
    return (
        <div className='sidebar'> 
            <i className='material-icons sidebar__close' onClick={closeSidebar}>close</i>
            <NavLinks mobile={true}/>
            <img  alt ='' className='mobile__logout'src="https://img.icons8.com/ios/50/000000/export.png"/>
        </div>
    )
};

export default SideBar;
