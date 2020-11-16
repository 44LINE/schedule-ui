import React from 'react';
import { fetchEntity } from '../../service/shared/EntityService';
import Lecturer from '../entity/Lecturer';
import ClassObject from '../entity/ClassObject';
import logo from '../../logo.svg';

class ClassProperties extends React.Component {
    constructor(props) {
        super();
        this.state = {
            classObjectLink: props.classObjectLink,
            lecturerLink: props.lecturerLink,
            classObject: null,
            lecturer: null,
        };
    }

    componentDidMount() {
        if (!this.state.classObject && !this.state.lecturer) {
            this.fetchData();
        } 
    };

    fetchData = async () => {
        console.log("Fetching...");
        this.state.classObject = await fetchEntity(this.state.classObjectLink);
        this.state.lecturer = await fetchEntity(this.state.lecturerLink);
        this.forceUpdate();
    };

    render() {
        if (this.state.classObject && this.state.lecturer) {
            return (
                    <div>
                    <ClassObject json={this.state.classObject} />
                    <Lecturer json={this.state.lecturer} />
                    </div>
            )
        } else {
            return <img src={logo} className="App-logo" id="small-logo" alt="logo" />;
        }
    }
};
export default ClassProperties;