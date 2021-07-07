import React from 'react';
import GroupEchoElement from '../GroupEchoElement/GroupEchoElement';
import style from './GroupEchoContainer.module.css';

function GroupEchoContainer() {
    return (
        <div className={style.container}>
            <GroupEchoElement/>
            <GroupEchoElement/>
            <GroupEchoElement/>
        </div>
    )
}

export default GroupEchoContainer;