import React,{useState} from 'react'

const Calendar = () => {
    const [choice] = useState(true);
    const [curentday,setDay] = useState(new Date());
    let result = [];
    const days = ['Mo','Tu','We','Th','Fr','Sa','Su'];
    const mounts = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const oneDay = 86400000;
    const day = new Date(curentday);
    if(choice){
        const today = day.getDay()-1<0?6:day.getDay()-1;
        const todayMl = day.getTime();
        for(let i = today-1; i>=0 ; i--){
            day.setTime(todayMl-((today-i)*oneDay))
            result[i]=[days[i],day.getDate(),day.getTime()>=Date.now()-oneDay+10000,day.getMonth()];
        }
        for(let i = today; i<7 ; i++){
            day.setTime(todayMl+((i-today)*oneDay))
            result[i]=[days[i],day.getDate(),day.getTime()>=Date.now()-oneDay+10000,day.getMonth()];
        }        
    }
    const selectDate = (e)=>{
        e.target.style.color= '#5c6aff';
        const progress = document.getElementsByClassName('progress__button');
        progress[0].style.borderColor= '#5c6aff';
        progress[0].style.color= '#5c6aff';
        
    }
    const inProgress = (e)=>{
        e.target.style.color= '#555';
        e.target.style.borderColor= '#555';
        const dates = document.getElementsByClassName('progress__date');
            for(let i=0; i<dates.length; i++){
                dates[i].style.color= '#555';
            }
    }
    const nextWeek = ()=>{

        setDay(new Date(curentday.getTime()+oneDay*7));
    }
    const prevWeek = ()=>{
        setDay(new Date(curentday.getTime()-oneDay*7));
    }
    return (
        <div className='calendar'>
            <div className='calendar__option'>
                <div className='option__date'>
                    <span>{result[0][1]} -{result[6][1]} {mounts[result[0][3]]} </span>
                </div>
                <div style={{display:'flex'}}>
                    <button className='option__button option__button--left' onClick={prevWeek}>
                        <i className='material-icons' style={{fontSize:'1em'}}>keyboard_arrow_left</i>
                    </button>
                    <button className='option__button option__button--right' onClick={nextWeek}>
                        <i className='material-icons' style={{fontSize:'1em'}}>keyboard_arrow_right</i>
                    </button>
                </div>
                <div className='option__dropdown'>
                    <button className='dropbtn'>Week <i className='material-icons' style={{fontSize:'1em'}}>keyboard_arrow_down</i></button>
                    <div className='dropdown__content'>
                        <a href='#/'>Week</a>
                        <a href='#/'>Mount</a>
                    </div>
                </div>
            </div>
            <div className='calendar__progress'>
                <div className='progress'>
                    {choice?
                        result.map(day=>(
                            <div key={''+day[0]+day[1]} className={day[2]?'progress__date' :'progress__date--disabled'}
                             onClick={day[2]?selectDate:null}>
                                <p style={{margin:'0'}}>{day[0]}</p>
                                <p style={{marginTop:'1em'}}>{day[1]}</p> 
                            </div>
                        ))    
                    :null}
                </div>
                <button className='progress__button' onClick={inProgress}>
                    In Progress
                </button>

            </div>
        </div>
    )
}

export default Calendar
