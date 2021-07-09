import React, {useState, useRef, useEffect} from 'react';
import Display from '../Display/Display';
import {HOST} from '../settings';
import style from './TimerEcho.module.css';
import commonStyle from '../common.module.css';

function TimerEcho() {
    let [data, setData] = useState([]);
    let connection = useRef(null);

    let show = text => {
        setData(oldData => setData([...oldData, text]));
    }

    useEffect(() => {
        let socket = new WebSocket(HOST + 'ws/timer_echo/');

        socket.onopen = () => {
            show('Соединение установлено');
            connection.current = socket;
        };
        socket.onmessage = event => show(event.data);
        socket.onclose = () => show('Соединение разорвано');

    }, [])

    let sendHandler = () => {
        if (!connection.current) return;
        connection.current.send('echo');
        show('>> echo');
    }

    return (
        <div className={style.container}>
            <h1 className={commonStyle.header}>
                Компонент открывает канал связи с серверным сокетом,
                отвечающим сразу серией сообщений на запрос от клиента.
            </h1>
            <Display data={data}/>
            <div className={commonStyle.control}>
                <input
                    type="button"
                    className={commonStyle.button + ' ' + commonStyle.enabled}
                    value="Отправить"
                    onClick={sendHandler}
                />
            </div>
        </div>
    )
}

export default TimerEcho;
