import React from 'react'

const Explanation = () => {
    return (
        <div className='explanation'>
            <div className='explanation__tetx'>
                <h1 className='text__header'>What is SMART Planning?</h1>
                <p className='text__comment'>
                    Business goals should always be Specific,<br/>
                    Measurable and Achievable.</p>
                <a className='text__link' href='/#'>learn more  ></a>
            </div>
            <div className='explanation__symbol explanation__symbol--orange'>
                <i className='material-icons'style={{fontSize:'1.5em'}}>pie_chart</i>
                <span>Graph</span>
            </div>
            <div className='explanation__symbol explanation__symbol--blue'>
                <i className='material-icons' style={{fontSize:'1.5em'}}>cloud_queue</i>
                <span>Cloud</span>
            </div>
        </div>
    )
}

export default Explanation
