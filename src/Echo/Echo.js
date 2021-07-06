import React, {useState, useRef, useEffect, useCallback} from 'react';
import Display from '../Display/Display';
import {HOST} from '../settings';
import style from './Echo.module.css';

const ECHO_TEXT = 'echo_request';

function Echo() {
    // Используется для управления созданием нового сокета
    let [socketFlag, setSocketFlag] = useState(0);

    // Данные для вывода на экран
    let [data, setData] = useState([]);

    // РАвен true, когда сокет готов к работе
    let [hasSocketReady, setHasSocketReady] = useState(false);

    // Текущий готовый к работе сокет
    let connection = useRef(null);

    let show = text => {
        setData(oldData => [...oldData, text])
    }

    // Если socketFlag изменился - создаем новый сокет
    useEffect(() => {
        if (socketFlag > 0) {
            let socket = new WebSocket(HOST + 'ws/echo/');
            socket.onopen = openHandler;
            socket.onmessage = receiveHandler;
        }
    }, [socketFlag]);

    // При размонтировании компонента - закрываем сокет, если он существовал
    useEffect(() => {
        if (connection.current) connection.current.close()
    }, []);

    // Обработчики событий для websocket-соединения

    let openHandler = event => {
        connection.current = event.target;
        show('Соединение открыто');
        setHasSocketReady(true);
    }

    let receiveHandler = event => {
        show('<< ' + event.data);
    }

    // Обработчики кликов на кнопках управления

    let openClickHandler = () => {
        setSocketFlag(oldVal => oldVal + 1);
    }

    let sendClickHandler = () => {
        if (!connection.current) return;
        connection.current.send(ECHO_TEXT);
        show('>> ' + ECHO_TEXT);
    }

    let closeClickHandler = () => {
        connection.current.close();
        setHasSocketReady(false);
        show('Соединение закрыто');
    }

    let clearClickHandler = () => {
        setData([]);
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
                <input
                    type="button"
                    className={style.button + (hasSocketReady ? (' ' + style.disabled) : (' ' + style.enabled))}
                    onClick={openClickHandler}
                    disabled={hasSocketReady}
                    value="Открыть"
                />
                <input
                    type="button"
                    className={style.button + (hasSocketReady ? (' ' + style.enabled) : (' ' + style.disabled))}
                    onClick={sendClickHandler}
                    disabled={!hasSocketReady}
                    value="Отправить"
                />
                <input
                    type="button"
                    className={style.button + (hasSocketReady ? (' ' + style.enabled) : (' ' + style.disabled))}
                    onClick={closeClickHandler}
                    disabled={!hasSocketReady}
                    value="Закрыть"
                />
                <input
                    type="button"
                    className={style.button + ' ' + (data.length === 0 ? style.disabled : style.enabled)}
                    onClick={clearClickHandler}
                    disabled={data.length === 0}
                    value="Очистить"
                />
            </div>
        </div>
    )
}

export default Echo;