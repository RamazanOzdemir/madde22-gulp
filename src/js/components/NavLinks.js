import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
const NavLinks = (props) => {
    const {mobile} = props;
    const [active,setActive] = useState('home');
    const beActive = (e)=>{
        e.persist();
        setActive(e.target.id);
    }
    return (
        <div className={mobile?'mobile__menu':'menu'}>
            <div className='menu__link' >
                <NavLink to='/' ><p id='home' className='icon' onClick={beActive}>Home</p></NavLink>
                {active==='home'?<i className='material-icons'style={{marginTop:'0',fontSize:'0.5rem'}}>lens</i>:null}
             
            </div>
            <div className='menu__link' >
                <NavLink to='/mail'><i className='material-icons icon' id='mail' onClick={beActive}>mail_outline</i></NavLink>
                <br/>{active==='mail'?<i className='material-icons'style={{fontSize:'0.5rem'}}>lens</i>:null}
            </div>
            <span className='menu__link'>
                <NavLink to='/clock'><img alt='' className='icon' src='../images/clock.png'  id='clock' onClick={beActive}/></NavLink>
                <br/>{active==='clock'?<i className='material-icons'style={{fontSize:'0.5rem'}}>lens</i>:null}
            </span>
            <span className='menu__link' >
                <NavLink to='/calendar'><img alt='' className='icon' src='../images/calendar.png' id='calendar' onClick={beActive}/></NavLink>
                <br/>{active==='calendar'?<i className='material-icons'style={{fontSize:'0.5rem'}}>lens</i>:null}
            </span>
        </div>
    )
}

export default NavLinks
