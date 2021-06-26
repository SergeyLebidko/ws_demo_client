import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './Menu.module.css';


function Menu({itemData, history}) {
    return (
        <ul className={style.container}>
            {itemData.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
    )
}

export default withRouter(Menu);