import React from 'react';
import style from './Display.module.css';

function Display({data}){
    return (
        <ul className={style.container}>
            {data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

export default Display;