import React from 'react';
import { getGroupedDailySchedules } from '../../service/api/GroupedDailyScheduleService';
import ScheduleContainer from '../../container/ScheduleContainer';
import UserService from '../../service/user.service';
import '../../../style/schedule.css';


class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: undefined,
            dataIsReturned: false,
            groupedDailySchedules: null
        };
    };

    componentDidMount() {
        if (!UserService.isLogged()) {
            this.props.history.push("/login");
        }

        if (!this.state.groupedDailySchedules) {
            this.fetchData();
        }
    };

    fetchData = async () => {
        console.log("Fetching...");
        this.state.groupId = UserService.getUserGroupId();
        this.state.groupedDailySchedules = await getGroupedDailySchedules(this.state.groupId);
        if (this.state.groupId || this.state.groupedDailySchedules) {
            this.forceUpdate();
        }
    };

    render() {
        if (this.state.groupedDailySchedules) {
            return(
                <div id="schedule-container" className="col-sm-12 align-items-center">
                    <h3 className="pb-4">HARMONOGRAM DLA GRUPY {this.state.groupId} </h3>
                    <ScheduleContainer collection={this.state.groupedDailySchedules} groupId={this.state.groupId}/>
                </div>
            );
        } else {
            return( 
                <div className="loading-spinner align-items-sm-center">
                    <span className="spinner-border spinner-border-lg"></span>
                </div>
            );
        }
    }
}
export default Schedule;