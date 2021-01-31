import React from 'react';
import GroupedDailySchedule from '../component/entity/GroupedDailySchedule';

const ScheduleContainer = ({collection}) => {
    if (collection) {
        return Object.keys(collection).map(key => {
        if (collection[key]._links) {
            return <GroupedDailySchedule
                        groupId={collection[key].groupId}
                        date={collection[key].date}
                        selfLink={collection[key]._links.self.href}
                        classDetailsListLink={collection[key]._links.classDetailsList.href}
                        key={key}/>
        } else {
            return null;
        }});
    } else {
        return <h3>Illegal collection state.</h3>;
    }
};
export default ScheduleContainer;