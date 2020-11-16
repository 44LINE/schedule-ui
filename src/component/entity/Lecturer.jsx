import React from 'react';
import styled from 'styled-components';



const RawLecturer = ({json}) => (

    //{name, surname, shortName, email, className}
    <div>
        <p>{json.name} {json.surname} {json.shortName}</p>
    </div>
);

const Lecturer = styled(RawLecturer)`
    color: black;
`;
export default Lecturer;