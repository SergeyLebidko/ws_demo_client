import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
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
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <div className={style.empty_block}><em>Выберите пункт меню</em></div>}
                    />
                    {menuItemData.map(
                        (item, index) =>
                            <Route key={index} path={`/${item.href}`} component={Cap}/>
                    )}
                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
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
