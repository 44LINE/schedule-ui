import React from 'react';
import Class from '../class/Class';

const RawGroupedDailySchedule = ({groupId, date, selfLink, classDetailsListLink, className}) => (
    <div className="class-details">
        <Class date={date} 
               selfLink={selfLink} 
               classDetailsListLink={classDetailsListLink}/>
    </div>
);

class GroupedDailySchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    };
    
    render() {
        if (this.state.isVisible) {
            return (
                <div id="grouped-daily-schedule" className="m-sm-0">
                    <button className="grouped-daily-schedule-button" onClick={() => this.setState({isVisible: false})}>{this.props.date}</button>
                    <RawGroupedDailySchedule 
                        groupId={this.props.groupId}
                        date={this.props.date}
                        selfLink={this.props.selfLink}
                        classDetailsListLink={this.props.classDetailsListLink}/>
                </div>);
        } else {
            return (
                <div id="grouped-daily-schedule">
                    <button className="grouped-daily-schedule-button" onClick={() => this.setState({isVisible: true})}>{this.props.date}</button>
                </div>
            );
        }
    }
};
export default GroupedDailySchedule;

