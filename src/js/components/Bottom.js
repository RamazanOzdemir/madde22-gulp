import React,{useState} from 'react'

const Bottom = () => {
    const [isArc,setAct] = useState(true);    
    const percent = isArc? 32.1 : 66.5;

    return (
        <div className='home__bottom'>
            <div className='bottom__img'>
                <img alt='left' src='../images/left.png' className='bottom__img'/>
                <div className='bottom__left'>
                    <h3 className='left__header'>Goals achieved</h3>
                    <ul className='left__list'>
                        <li><i className='material-icons left__check'>check</i>Market share</li>
                        <li><i className='material-icons left__check'>check</i>Custemer service</li>
                        <li><i className='material-icons left__check'>check</i>Increase efficiency</li>
                    </ul>
                </div>
            </div>
            <div className='bottom__img'>
                <img alt='' src='../images/background2.png' className='bottom__img'/>
                <img alt='' src='../images/men.png' className='bottom__men'/>
                <img alt='' src='../images/arm.png' className='bottom__arm'/>
                <img alt='' src='../images/ball.png' className='bottom__ball'/>
                <div className='bottom__right'>
                    <h3 style={{fontSize:'1.4em'}}>SMART progress</h3>
                    <div>
                        <h2 style={{fontSize:'1.2em'}}>{percent}%</h2>
                        <div className='progressBar'>
                            <div className='percent' style={{width:`${percent}%`}} ></div>
                        </div>
                        <div className='right__option'>
                            <div className={isArc?'right__option--active':'right__option--not'}
                                onClick={()=>{setAct(true)}}>
                                Archived<br/>{isArc?<i className='material-icons'style={{fontSize:'0.5em'}}>lens</i>:null}
                            </div>
                            <div className={!isArc?'right__option--active':'right__option--not'}
                                onClick={()=>{setAct(false)}}>
                                Active<br/>{!isArc?<i className='material-icons'style={{fontSize:'0.5em'}}>lens</i>:null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom__start'>
                    <h3 className='start__header'>Welcome to SMART</h3>
                    <p className='start__text'>Goal setting and goal management software for high achieves.</p>
                    <button className='start__btn'>Get Started</button>
            </div>
        </div>
    )
}

export default Bottom
