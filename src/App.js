import React from 'react';
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
                Здесь будет контент под роутером
            </div>
        </div>
    );
}

export default App;
