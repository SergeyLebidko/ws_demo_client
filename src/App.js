import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Menu from './Menu/Menu';
import Echo from './Echo/Echo';
import style from './App.module.css';

const menuItemData = [
    {
        title: 'Первый',
        href: 'echo',
        component: Echo
    },
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
                            <Route key={index} path={`/${item.href}`} component={item.component}/>
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