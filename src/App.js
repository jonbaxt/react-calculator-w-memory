import React, { Component } from 'react';

import MainCalculator from './Components/MainCalculator/MainCalculator';
import ResultsSection from './Components/ResultsSection/ResultsSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCalculator />
        <ResultsSection />
      </div>
    );
  }
}

export default App;
