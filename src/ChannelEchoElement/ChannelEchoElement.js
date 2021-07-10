import React, {useState} from 'react';
import Display from '../Display/Display';
import style from './ChannelEchoElement.module.css';
import commonStyle from '../common.module.css';

function ChannelEchoElement({title, otherTitles}) {
    let [data, setData] = useState([]);

    return (
        <div className={style.container}>
            <h3 className={style.element_title}>{title}</h3>
            <Display data={data}/>
            <div className={commonStyle.control}>
                <input
                    type="button"
                    className={commonStyle.button + ' ' + commonStyle.enabled}
                    value={`Отправить ${otherTitles[0]}`}
                />
                <input
                    type="button"
                    className={commonStyle.button + ' ' + commonStyle.enabled}
                    value={`Отправить ${otherTitles[1]}`}
                />
            </div>
        </div>
    )
}

export default ChannelEchoElement;