import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {  ClockContainerStyled,
          HandHour,
          HandMinute,
          HandSecond        
} from './analog-clock-container.styles';
import Node from '../node/node.component';

const AnalogClockContainer = (props) => {
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
        <ClockContainerStyled
            size={props.size}
            border={props.border}
            borderColor={props.borderColor}
            borderWidth={props.borderWidth}
            centerNodeColor={props.centerNodeColor}
            centerNodeSize={props.centerNodeSize}
        >
            <HandHour 
                hourRatio={hourRatio}
                hourHandColor={props.hourHandColor}
                hourHandLength={props.hourHandLength}
                hourHandWidth={props.hourHandWidth}
            />
            <HandMinute
                minuteRatio={minuteRatio}
                minuteHandColor={props.minuteHandColor}
                minuteHandLength={props.minuteHandLength}
                minuteHandWidth={props.minuteHandWidth}
            />
            <HandSecond secondRatio={secondRatio}
                 secondHandColor={props.secondHandColor}
                 secondHandLength={props.secondHandLength}
                 secondHandWidth={props.secondHandWidth}
            />

            {Array.from(Array(12), (e, i) => (
                <Node key={i} hour={i} 
                    renderHourMarks={props.renderHourMarks}
                    renderMinuteMarks={props.renderMinuteMarks}
                    hourMarksColor={props.hourMarksColor}
                    hourMarksWidth={props.hourMarksWidth}
                    hourMarksHeight={props.hourMarksHeight}
                    minuteMarksColor={props.minuteMarksColor}
                    minuteMarksWidth={props.minuteMarksWidth}
                    minuteMarksHeight={props.minuteMarksHeight}
                />
            ))}
     
        </ClockContainerStyled>
    );
}

export default AnalogClockContainer;


AnalogClockContainer.propTypes = {
    size : PropTypes.number, //in pixels 
    border: PropTypes.bool,
    centerNodeColor: PropTypes.string,
    centerNodeSize: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number, //in pixels
    hourHandLength: PropTypes.number, //in %,
    hourHandWidth: PropTypes.number, //in pixels,
    hourHandColor : PropTypes.string,
    minuteHandLength: PropTypes.number, //in %,
    minuteHandWidth: PropTypes.number, //in pixels,
    minuteHandColor : PropTypes.string,
    secondHandLength: PropTypes.number, //in %,
    secondHandWidth: PropTypes.number, //in pixels,
    secondHandColor : PropTypes.string,
    renderMinuteMarks: PropTypes.bool,
    renderHourMarks: PropTypes.bool,
    hourMarksColor: PropTypes.string,
    hourMarksWidth: PropTypes.number, //in pixels
    hourMarksHeight: PropTypes.number, //in pixels
    minuteMarksColor: PropTypes.string,
    minuteMarksWidth: PropTypes.number, //in pixels
    minuteMarksHeight: PropTypes.number //in pixels
}; 

AnalogClockContainer.defaultProps = {
    size: 500,
    border: true,
    centerNodeColor: 'white',
    centerNodeSize: 20,
    borderColor: '#5f5f5f',
    borderWidth: 15,
    hourHandLength: 30,
    hourHandWidth: 12,
    hourHandColor: 'rgba(255, 255, 255, .8)',
    minuteHandLength: 39,
    minuteHandWidth: 8,
    minuteHandColor: 'grey',
    secondHandLength: 46,
    secondHandWidth: 3,
    secondHandColor: 'red',
    renderMinuteMarks: true,
    renderHourMarks: true,
    hourMarksColor: 'white',
    hourMarksWidth: 10,
    hourMarksHeight: 8,
    minuteMarksColor: '#7b7b7b',
    minuteMarksWidth: 4,
    minuteMarksHeight: 4,
};