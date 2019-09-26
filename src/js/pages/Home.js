import React from 'react'
import SearchBar from '../components/SearchBar';
import Calendar from '../components/Calendar';
import Explanation from '../components/Explanation';
import Bottom from '../components/Bottom';
import User from '../components/User';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__top'>
                <SearchBar/>
                <i className='material-icons notification'>notifications_none</i>
                <User/>
            </div>
            <div className='home__midle'>
                <div>
                    <Explanation/>
                    <Calendar/>
                </div>
                <div>
                    <img alt='' src='../images/woman.png' className='woman'/>
                </div>
            </div>
            <div>
                <Bottom/>
            </div>
        </div>
    )
}

export default Home;
