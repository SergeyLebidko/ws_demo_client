import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './Menu.module.css';

function Menu({itemData, history, location}) {
    console.log(location.pathname);

    return (
        <ul className={style.container}>
            {itemData.map(
                (item, index) =>
                    <li
                        key={index}
                        className={style.menu_item + (location.pathname === ('/' + item.href) ? ' ' + style.selected_item : '')}
                        onClick={() => history.push(item.href)}
                    >
                        {item.title}
                    </li>
            )}
        </ul>
    )
}

export default withRouter(Menu);