import React, {useEffect} from 'react';
import {HOST} from '../settings';
import style from './Echo.module.css';

function Echo() {

    useEffect(() => {
        let socket = new WebSocket(HOST + 'ws/echo/');
        return () => socket.close();
    }, []);

    return (
        <div>
            Здесь будет реализован простой эхо-сервер...
        </div>
    )
}

export default Echo;