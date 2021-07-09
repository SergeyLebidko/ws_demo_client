import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Menu from './Menu/Menu';
import Echo from './Echo/Echo';
import GroupEchoContainer from './GroupEchoContainer/GroupEchoContainer';
import TimerEcho from './TimerEcho/TimerEcho';
import style from './App.module.css';

const menuItemData = [
    {
        title: 'Простейший эхо-сокет',
        href: 'echo',
        component: Echo
    },
    {
        title: 'Сокет с групповой рассылкой',
        href: 'group_echo',
        component: GroupEchoContainer
    },
    {
        title: 'Сокет, рассылающий сообщения по таймеру',
        href: 'timer_echo',
        component: TimerEcho
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