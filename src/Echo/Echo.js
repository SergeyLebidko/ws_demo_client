import React, {useState, useRef, useEffect} from 'react';
import Display from '../Display/Display';
import {HOST} from '../settings';
import style from './Echo.module.css';
import commonStyle from '../common.module.css';

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
            socket.onclose = closeHandler;
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

    let closeHandler = () => {
        show('Соединение закрыто');
        setHasSocketReady(false);
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
    }

    let clearClickHandler = () => {
        setData([]);
    }

    return (
        <div className={style.container}>
            <h1 className={commonStyle.header}>
                Простейший пример организации работы с сокетами.
                Соединение с сервером открывается из закрывается по требованию пользователя.
                Сервер сразу же присылает сообщение в ответ на запрос с клиентской стороны.
            </h1>
            <Display data={data}/>
            <div className={commonStyle.control}>
                <input
                    type="button"
                    className={commonStyle.button + (hasSocketReady ? (' ' + commonStyle.disabled) : (' ' + commonStyle.enabled))}
                    onClick={openClickHandler}
                    disabled={hasSocketReady}
                    value="Открыть"
                />
                <input
                    type="button"
                    className={commonStyle.button + (hasSocketReady ? (' ' + commonStyle.enabled) : (' ' + commonStyle.disabled))}
                    onClick={sendClickHandler}
                    disabled={!hasSocketReady}
                    value="Отправить"
                />
                <input
                    type="button"
                    className={commonStyle.button + (hasSocketReady ? (' ' + commonStyle.enabled) : (' ' + commonStyle.disabled))}
                    onClick={closeClickHandler}
                    disabled={!hasSocketReady}
                    value="Закрыть"
                />
                <input
                    type="button"
                    className={commonStyle.button + ' ' + (data.length === 0 ? commonStyle.disabled : commonStyle.enabled)}
                    onClick={clearClickHandler}
                    disabled={data.length === 0}
                    value="Очистить"
                />
            </div>
        </div>
    )
}

export default Echo;