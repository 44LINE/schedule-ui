import React from 'react';
import ClassDetails from '../component/entity/ClassDetails';

const ClassContainer = ({collection}) => {
    if (collection) {
        return Object.keys(collection).map(key => {
        if (collection[key].classPeriod && collection[key]._links) {
            console.log(collection[key]);
            return <ClassDetails 
                        type={collection[key].type}
                        startTime={collection[key].classPeriod.startTime}
                        endTime={collection[key].classPeriod.endTime}
                        selfLink={collection[key]._links.self.href}
                        classObjectLink={collection[key]._links.classObject.href}
                        lecturerLink={collection[key]._links.lecturer.href}
                        key={key}/>
        } else {
            return null;
        }});
    } else {
        return <h3>Illegal collection state.</h3>;
    }
};
export default ClassContainer;