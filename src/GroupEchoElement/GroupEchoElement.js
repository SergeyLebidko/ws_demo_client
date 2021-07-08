import React, {useState, useRef, useEffect} from 'react';
import Display from '../Display/Display';
import {HOST} from '../settings';
import style from './GroupEchoElement.module.css';
import commonStyle from '../common.module.css';

function GroupEchoElement({setUpData}) {
    let [data, setData] = useState([]);
    let connection = useRef(null);

    let show = (text) => {
        setData(oldData => [...oldData, text]);
    }

    useEffect(() => {
        let socket = new WebSocket(HOST + 'ws/group_echo/');
        socket.onopen = () => {
            show('Соединение установлено');
            connection.current = socket;
        };
        socket.onmessage = receiveHandler;
        socket.onclose = () => show('Соединение разорвано');

        return () => socket.close();
    }, []);

    // Обработчик приема сообщений из сокета
    let receiveHandler = event => {
        show(event.data);
    }

    // Обработчик клика по кнопке отправки
    let changeMessageHandler = () => {
        if (!connection.current) return;
        let value = setUpData[Math.floor(Math.random() * setUpData.length)];
        connection.current.send(value);
    }

    return (
        <div className={style.container}>
            <Display data={data}/>
            <div className={commonStyle.control}>
                <input
                    type="button"
                    className={commonStyle.button + ' ' + commonStyle.enabled} value="Отправить"
                    onClick={changeMessageHandler}
                />
            </div>
        </div>
    );
}

export default GroupEchoElement;