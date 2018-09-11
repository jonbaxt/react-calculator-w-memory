import React, { Component } from 'react';

import MainCalculator from './Components/MainCalculator/MainCalculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCalculator />
      </div>
    );
  }
}

export default App;
