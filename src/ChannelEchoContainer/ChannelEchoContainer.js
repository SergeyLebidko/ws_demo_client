import React from 'react';
import ChannelEchoElement from '../ChannelEchoElement/ChannelEchoElement';
import style from './ChannelEchoContainer.module.css';
import commonStyle from '../common.module.css';

const titles = ['Alpha', 'Beta', 'Gamma'];

function ChannelEchoContainer() {
    return (
        <div className={style.container}>
            <h1 className={commonStyle.header}>
                Данный пример демонстрирует возможность отправки сообщений через WebSocket не всем участникам
                какой-либо группы, а только определенным адресатам.
            </h1>
            {titles.map(
                title =>
                    <ChannelEchoElement
                        key={title}
                        title={title}
                        otherTitles={titles.filter(otherTitle => otherTitle !== title)}
                    />
            )}
        </div>
    )
}

export default ChannelEchoContainer;