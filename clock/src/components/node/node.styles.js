import styled from 'styled-components';


export const NodeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: rotate(${({position}) => position*30}deg);
    color: white;
`;

export const ThickNode = styled.div`
    height: 10px;
    width: 12px;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const MinuteNodeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: rotate(${({position}) => position*30+position*6}deg);
    color: white;
`;

export const ThinNode = styled.div`
    height: 5px;
    width: 7px;
    background-color: #7b7b7b;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;