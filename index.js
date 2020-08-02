import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import LandingPage from './components/LandingPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
