import React from 'react';
import { fetchClassDetails } from '../../service/ClassDetailsService';
import ClassContainer from '../../container/ClassContainer';
import logo from '../../logo.svg';


class Class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selfLink: props.selfLink,
            classDetailsListLink: props.classDetailsListLink,
            classDetails: null,
            hasClassDetails: true
        };
    }

    componentDidMount() {
        if (!this.state.classDetails) {
            this.fetchData();
        } 
    };

    fetchData = async () => {
        console.log("Fetching...");
        this.state.classDetails = await fetchClassDetails(this.state.classDetailsListLink);
        if (!this.state.classDetails) {
            this.state.hasClassDetails = false;
        }

        this.forceUpdate();
    };

    render() {
        if (this.state.classDetails) {
            return(
                <div className="class-details-period"> 
                    <ClassContainer collection={this.state.classDetails} />
                </div>
            );
        } else if (!this.state.hasClassDetails) {
            return null;
        } else {
            return <img src={logo} className="App-logo" id="small-logo" alt="logo" />;
        }
    }
};
export default Class;