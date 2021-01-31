import React from 'react';
import styled from 'styled-components';

const RawClassObject = ({json}) => (
    //name, shortName, className
    <div>
        <p>{json.name}</p>
    </div>
);

const ClassObject = styled(RawClassObject)`
    color: black;
`;
export default ClassObject;