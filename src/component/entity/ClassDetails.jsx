import React from 'react';
import styled from 'styled-components';
import ClassProperties from '../class/ClassProperties';

const RawClassDetails = ({type, startTime, endTime, selfLink, classObjectLink, lecturerLink, className}) => (
    <div className={className}>
        <h3>{startTime} - {endTime}</h3>
        <h4>{type}</h4>
        <ClassProperties classObjectLink={classObjectLink} lecturerLink={lecturerLink} />
    </div>
);

const ClassDetails = styled(RawClassDetails)`
    color: black;
`;
export default ClassDetails;
