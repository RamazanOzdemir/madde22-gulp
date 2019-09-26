import React from 'react';

const User = (props) => {
    const {mobile} = props;
    return (
        <div className={mobile?'mobile__user':'user'}>
            <img alt='' src='../images/avatar.png' className={mobile?'navbar__avatar':'user__avatar'}/>
            <span className={`user__name ${mobile?'none':null}`}>Boniface Esanji</span>
        </div>
    )
};

export default User;
