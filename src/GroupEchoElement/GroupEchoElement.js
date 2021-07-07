import React from 'react';
import Display from '../Display/Display';
import style from './GroupEchoElement.module.css';
import commonStyle from '../common.module.css';

function GroupEchoElement() {
    return (
        <div className={style.container}>
            <Display data={[]}/>
            <div className={commonStyle.control}>
                <input type="button" className={commonStyle.button + ' ' + commonStyle.enabled} value="Отправить"/>
            </div>
        </div>
    );
}

export default GroupEchoElement;