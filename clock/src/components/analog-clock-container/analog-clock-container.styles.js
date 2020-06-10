import styled, { css } from 'styled-components';

const HandStyled = css`
    position: absolute;
    bottom: 50%;
    left: 50%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform-origin: bottom;
`;

const ClockBorderStyle = css`
    border-style: solid;
    border-color: ${(({borderColor}) => borderColor)};
    border-width: ${(({borderWidth}) => borderWidth)}px;
`;

export const ClockContainerStyled = styled.div`
    width: ${(({size}) => size)}px;
    height: ${(({size}) => size)}px;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 50%;
    position: relative;
    ${ClockBorderStyle};
    border: ${(({border}) => border? '' : 'none')};

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: ${(({centerNodeColor}) => centerNodeColor)};
        height: ${(({centerNodeSize}) => centerNodeSize)}px;
        width: ${(({centerNodeSize}) => centerNodeSize)}px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
`;

export const HandSecond = styled.div`
    ${HandStyled};
    width: ${(({secondHandWidth}) => secondHandWidth)}px;
    height: ${(({secondHandLength}) => secondHandLength)}%;
    background-color: ${(({secondHandColor}) => secondHandColor)};
    transform: translateX(-50%) rotate(${({secondRatio}) => secondRatio*360}deg);
`;

export const HandMinute = styled.div`
    ${HandStyled};
    width: ${(({minuteHandWidth}) => minuteHandWidth)}px;
    height: ${(({minuteHandLength}) => minuteHandLength)}%;
    background-color: ${(({minuteHandColor}) => minuteHandColor)};
    transform: translateX(-50%) rotate(${({minuteRatio}) => minuteRatio*360}deg);
`;

export const HandHour = styled.div`
    ${HandStyled};
    width: ${(({hourHandWidth}) => hourHandWidth)}px;
    height: ${(({hourHandLength}) => hourHandLength)}%;
    background-color: ${(({hourHandColor}) => hourHandColor)};
    transform: translateX(-50%) rotate(${({hourRatio}) => hourRatio*360}deg);
`

