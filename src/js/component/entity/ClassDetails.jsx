import React from 'react';
import styled from 'styled-components';
import ClassProperties from '../class/ClassProperties';

const RawClassDetails = ({type, startTime, endTime, selfLink, classObjectLink, lecturerLink, className}) => (
    <div className={type}>
        <div className="mt-4 mb-3 p-1">
            <h3 className="class-details-period pt-2">{startTime} - {endTime}</h3>
            <ClassProperties classObjectLink={classObjectLink} lecturerLink={lecturerLink} />
        </div>
    </div>
);

const ClassDetails = styled(RawClassDetails)`
    color: black;
`;
export default ClassDetails;
