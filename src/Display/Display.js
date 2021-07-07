import React, {useRef, useEffect} from 'react';
import style from './Display.module.css';

function Display({data}) {
    let container = useRef(null);

    useEffect(() => {
        let {clientHeight, scrollHeight} = container.current;
        if (clientHeight < scrollHeight) container.current.scrollTop = scrollHeight;
    }, [data]);

    return (
        <ul className={style.container} ref={container}>
            {data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

export default Display;