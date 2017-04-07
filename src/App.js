import React, { Component } from 'react';
import Game from './Game';
import './App.css';
class App extends Component {
  render() {
    return (
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <Game/>
        </div>
    );
  }
}

export default App;
