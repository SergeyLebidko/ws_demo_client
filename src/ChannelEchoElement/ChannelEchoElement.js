import React, {useState, useRef, useEffect} from 'react';
import Display from '../Display/Display';
import {HOST} from '../settings';
import style from './ChannelEchoElement.module.css';
import commonStyle from '../common.module.css';

function ChannelEchoElement({title, otherTitles}) {
    let [data, setData] = useState([]);

    let counter = useRef(0);
    let connection = useRef(null);

    let show = text => setData(oldData => [...oldData, text]);

    useEffect(() => {
        let socket = new WebSocket(HOST + 'ws/channel_echo/');

        socket.onopen = () => {
            // Отправляем идентификатор клиента
            socket.send(
                JSON.stringify({
                    type: 'set_title',
                    title
                })
            )
            show('Соединение открыто');
            connection.current = socket;
        }
        socket.onmessage = event => show(event.data);
        socket.onclose = () => show('Соединение закрыто');

        return () => socket.close();
    }, []);

    let sendHandler = recipient => {
        if (!connection.current) return;
        connection.current.send(
            JSON.stringify({
                type: 'message',
                message: `${title.toLowerCase()}_${counter.current++}`,
                recipient
            })
        );
    }

    return (
        <div className={style.container}>
            <h3 className={style.element_title}>{title}</h3>
            <Display data={data}/>
            <div className={commonStyle.control}>
                <input
                    type="button"
                    className={commonStyle.button + ' ' + commonStyle.enabled}
                    value={`Отправить ${otherTitles[0]}`}
                    onClick={() => sendHandler(otherTitles[0])}
                />
                <input
                    type="button"
                    className={commonStyle.button + ' ' + commonStyle.enabled}
                    value={`Отправить ${otherTitles[1]}`}
                    onClick={() => sendHandler(otherTitles[1])}
                />
            </div>
        </div>
    )
}

export default ChannelEchoElement;