import React from 'react';
import styled from 'styled-components';



const RawLecturer = ({json}) => (

    //{name, surname, shortName, email, className}
    <div className="lecturer">
        <p>{json.name} {json.surname}</p>
    </div>
);

const Lecturer = styled(RawLecturer)`
    color: black;
`;
export default Lecturer;