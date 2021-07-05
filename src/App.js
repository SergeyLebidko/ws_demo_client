import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Menu from './Menu/Menu';
import style from './App.module.css';

const menuItemData = [
    {
        title: 'Первый',
        href: '_1'
    },
    {
        title: 'Второй',
        href: '_2'
    },
    {
        title: 'Третий',
        href: '_3'
    },
    {
        title: 'Четвертый',
        href: '_4'
    },
    {
        title: 'Пятый',
        href: '_5'
    }
]

function App() {
    return (
        <div className={style.container}>
            <div className={style.menu_block}>
                <Menu itemData={menuItemData}/>
            </div>
            <div className={style.content_block}>
                <HashRouter>
                    <Route exact path="/" render={() => <div>Выберите пункт меню</div>}/>
                    {menuItemData.map(
                        (item, index) =>
                            <Route key={index} path={`/${item.href}`} component={Cap}/>
                    )}
                </HashRouter>
            </div>
        </div>
    );
}

export default App;

const Cap = ({location}) => {
    return (
        <div>
            {location.pathname}
        </div>
    );
}
