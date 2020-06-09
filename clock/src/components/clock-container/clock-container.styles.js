import styled, { css } from 'styled-components';

const HandStyled = css`
    position: absolute;
    bottom: 50%;
    left: 50%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform-origin: bottom;
`;

export const ClockContainerStyled = styled.div`
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 50%;
    position: relative;
    border: 10px solid #5f5f5f;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: white;
        height: 15px;
        width: 15px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
`;

export const HandSecond = styled.div`
    ${HandStyled};
    width: 2px;
    height: 46%;
    background-color: red;
    transform: translateX(-50%) rotate(${({secondRatio}) => secondRatio*360}deg);
`;

export const HandMinute = styled.div`
    ${HandStyled};
    width: 6px;
    height: 39%;
    background-color: grey;
    transform: translateX(-50%) rotate(${({minuteRatio}) => minuteRatio*360}deg);
`;

export const HandHour = styled.div`
    ${HandStyled};
    width: 10px;
    height: 30%;
    background-color: white;
    transform: translateX(-50%) rotate(${({hourRatio}) => hourRatio*360}deg);
`

