import React from 'react'
import NavLinks from './NavLinks';
import User from './User';
const openSidebar = ()=>{
    const sideBar = document.getElementsByClassName('sidebar');
    sideBar[0].style.width='60rem';
    const closeBtn = document.getElementsByClassName('sidebar__close');
    closeBtn[0].style.display='block';
}
const Navbar = ()=>{
    return (
        <div className='navbar navbar--bg' >
            <div className='menuBtn'>
                <i className='material-icons menuBtn__icon' onClick={openSidebar}>menu</i>
            </div>
            <img src='../images/brand.png' alt='Logo' className='navbar__logo'/>
            <div className='navbar__mobile' >
                <i className='material-icons navbar__not'>notifications_none</i>
                <User mobile={true}/>
            </div>
            <NavLinks/>
            <img  alt ='Logout' className='navbar__logout'src="https://img.icons8.com/ios/50/000000/export.png"/>
        </div>
    )
}

export default Navbar;
