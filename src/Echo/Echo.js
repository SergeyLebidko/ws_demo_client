import React, {useState, useRef, useEffect, useCallback} from 'react';
import Display from '../Display/Display';
import {HOST} from '../settings';
import style from './Echo.module.css';

const ECHO_TEXT = 'echo_request';

function Echo() {
    let [data, setData] = useState([]);
    let connection = useRef(null);

    let show = text => {
        setData(oldData => [...oldData, text])
    }

    useEffect(() => {
        let socket = new WebSocket(HOST + 'ws/echo/');
        socket.onopen = openHandler;
        socket.onmessage = receiveHandler;
        socket.onclose = closeHandler;

        return () => socket.close();
    }, []);

    let openHandler = event => {
        connection.current = event.target;
        show('Соединение открыто');
    }

    let receiveHandler = event => {
        show('Получено от сервера: ' + event.data);
    }

    let sendHandler = () => {
        if (!connection.current) return;
        connection.current.send(ECHO_TEXT);
        show('Отправлено на сервер: ' + ECHO_TEXT);
    }

    let closeHandler = () => {
        show('Соединение закрыто');
    }

    return (
        <div className={style.container}>
            <h1 className={style.header}>
                Простейший пример организации работы с сокетами.
                При монтировании компонента websocket открывается, при размонтировании - закрывается.
                При нажатии на кнопку "Отправить" на сервер отправляется сообщение.
                Ответ сервера выводится пользователю.
            </h1>
            <Display data={data}/>
            <div className={style.control}>
                <button className={style.send_button} onClick={sendHandler}>
                    Отправить
                </button>
            </div>
        </div>
    )
}

export default Echo;