import React from 'react';

import { NodeContainer, ThickNode, MinuteNodeContainer, ThinNode } from './node.styles';

const Node = ({ 
    hour, renderHourMarks, renderMinuteMarks,
    hourMarksColor, hourMarksWidth, hourMarksHeight,
    minuteMarksColor, minuteMarksWidth, minuteMarksHeight,
    }) => {
    return (
        <NodeContainer position={hour}>
            {Array.from(Array(5), (e, i) => {
                if (i === 0 && renderHourMarks) 
                    return (
                        <ThickNode
                            key={i}
                            hourMarksColor={hourMarksColor}
                            hourMarksWidth={hourMarksWidth}
                            hourMarksHeight={hourMarksHeight}
                        />
                    )
                if (i !== 0 && renderMinuteMarks) 
                    return (
                        <MinuteNodeContainer position={i} key={i}>
                            <ThinNode
                                minuteMarksColor={minuteMarksColor}
                                minuteMarksHeight={minuteMarksHeight}
                                minuteMarksWidth={minuteMarksWidth}
                            />
                        </MinuteNodeContainer>
                    )
                return null;
            })}
         
        </NodeContainer>
    );
}
export default Node;