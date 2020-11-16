import React from 'react';
import logo from '../../logo.svg';
import { getGroupedDailySchedules } from '../../service/GroupedDailyScheduleService';
import ScheduleContainer from '../../container/ScheduleContainer';

class Schedule extends React.Component {
    constructor(props) {
        super();
        this.state = {
            groupId: props.groupId,
            dataIsReturned: false,
            groupedDailySchedules: null
        };
    };

    componentDidMount() {
        if (!this.state.groupedDailySchedules) {
            this.fetchData();
        } 
    };

    fetchData = async () => {
        console.log("Fetching...");
        this.state.groupedDailySchedules = await getGroupedDailySchedules(this.state.groupId);
        if (this.state.groupedDailySchedules) {
            this.forceUpdate();
        }
    };

    render() {
        if (this.state.groupedDailySchedules) {
            return(
                <div id="schedule-container"> 
                    <h4 id="schedule-container-header">HARMONOGRAM DLA GRUPY {this.state.groupId}</h4>
                    <ScheduleContainer collection={this.state.groupedDailySchedules} groupId={this.state.groupId}/>;
                </div>
            );
        } else {
            return( 
                <div id="loading-div">    
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Powered by Redux</h3>
                </div>
            );
        }
    }
};
export default Schedule;