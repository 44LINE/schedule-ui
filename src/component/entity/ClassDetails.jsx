import React from 'react';
import styled from 'styled-components';
import ClassProperties from '../class/ClassProperties';

const RawClassDetails = ({type, startTime, endTime, selfLink, classObjectLink, lecturerLink, className}) => (
    <div className={type}>
        <h3>{startTime} - {endTime}</h3>
        <ClassProperties classObjectLink={classObjectLink} lecturerLink={lecturerLink} />
    </div>
);

const ClassDetails = styled(RawClassDetails)`
    color: black;
`;
export default ClassDetails;
