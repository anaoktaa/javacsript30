import React, { useEffect } from 'react';

import './clock-container.css';

const ClockContainer = () => {

    useEffect(() => {
        const hourHand = document.querySelector('[data-hour-hand]');
        const minuteHand = document.querySelector('[data-minute-hand]');
        const secondHand = document.querySelector('[data-second-hand]');

        const setClock = () => {
            const currentDate = new Date();
            const secondRatio = currentDate.getSeconds() / 60;
            const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
            const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
        
            setRotation(secondHand, secondRatio);
            setRotation(minuteHand, minuteRatio);
            setRotation(hourHand, hourRatio);
        }

        const setRotation = (element, rotationRatio) => {
            element.style.setProperty("--rotation", rotationRatio*360);
        }

        setInterval(setClock, 1000);
        setClock();
    })

    return (
        <div className='clock'>
            <div className='hand hour' data-hour-hand></div>
            <div className='hand minute'data-minute-hand></div>
            <div className='hand second' data-second-hand></div>

            <div className='number number1'>1</div>
            <div className='number number2'>2</div>
            <div className='number number3'>3</div>
            <div className='number number4'>4</div>
            <div className='number number5'>5</div>
            <div className='number number6'>6</div>
            <div className='number number7'>7</div>
            <div className='number number8'>8</div>
            <div className='number number9'>9</div>
            <div className='number number10'>10</div>
            <div className='number number11'>11</div>
            <div className='number number12'>12</div>
        </div>
    );
}

export default ClockContainer;