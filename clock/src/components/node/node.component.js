import React from 'react';

import { NodeContainer, ThickNode, MinuteNodeContainer, ThinNode } from './node.styles';

const Node = ({ hour }) => {
    return (
        <NodeContainer position={hour}>
            {Array.from(Array(6), (e, i) => {
                if (i === 5) return <ThickNode/>
                return (
                    <MinuteNodeContainer position={i}>
                        <ThinNode/>
                    </MinuteNodeContainer>
                )
                
            })}
         
        </NodeContainer>
    );
}
export default Node;