import React from 'react';
import GroupEchoElement from '../GroupEchoElement/GroupEchoElement';
import style from './GroupEchoContainer.module.css';
import commonStyle from '../common.module.css';

function GroupEchoContainer() {
    return (
        <div className={style.container}>
            <h1 className={commonStyle.header}>
                Модель чата. Каждый из трех клиентов подключается по протоколу webscoket к серверу и отправляет
                сообщения.
                Отправленные сообщения тут же поступают к остальным клиентам.
            </h1>
            <GroupEchoElement setUpData={['Красный', 'Синий', 'Зеленый', 'Белый']}/>
            <GroupEchoElement setUpData={['Огонь', 'Вода', 'Воздух', 'Земля']}/>
            <GroupEchoElement setUpData={['Python', 'JavaScript', 'PHP', 'C#']}/>
        </div>
    )
}

export default GroupEchoContainer;