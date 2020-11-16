import React from 'react';
import './App.css';
import Schedule from './component/class/Schedule';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groupId: null
    };
  }

  render() {
    if (this.state.groupId) {
      return ( 
        <Schedule groupId={this.state.groupId} />
      )
    } else {
      return (
        <div className="App">
          <header id="app-start">
            <h2>Wybierz grupę</h2> <br/>
            <button id="group-button" onClick={() => this.setState ({groupId: 1})}>Grupa 1</button>
            <button id="group-button" onClick={() => this.setState ({groupId: 2})}>Grupa 2</button>
            <button id="group-button" onClick={() => this.setState ({groupId: 3})}>Grupa 3</button>
            <button id="group-button" onClick={() => this.setState ({groupId: 4})}>Grupa 4</button>
          </header>
        </div>
      );
    }
  }
}

export default App;
