import React, { useEffect, useState } from 'react';

import { ClockContainerStyled,
          HandHour,
          HandMinute,
          HandSecond        
} from './clock-container.styles';
import HourNode from '../node/node.component';

import './clock-container.css';

const ClockContainer = () => {
    const [rotationPosition, setRotationPosition] = useState({secondRatio: 0, minuteRatio: 0, hourRatio: 0});

    const { secondRatio, minuteRatio, hourRatio } = rotationPosition;
    
    useEffect(() => {
        const setClock = () => {
            const currentDate = new Date();
            const secondRatio = currentDate.getSeconds() / 60;
            const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
            const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
        
            setRotationPosition({
                secondRatio,
                minuteRatio,
                hourRatio
            })
        }

        setInterval(setClock, 1000);
        setClock();
    }, []);

    return (
        <ClockContainerStyled>
            <HandHour hourRatio={hourRatio}/>
            <HandMinute minuteRatio={minuteRatio}/>
            <HandSecond secondRatio={secondRatio}/>

            {Array.from(Array(12), (e, i) => (
                <HourNode key={i} hour={i} />
            ))}
     
        </ClockContainerStyled>
    );
}

export default ClockContainer;