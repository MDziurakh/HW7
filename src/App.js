import React, { Component } from 'react';
import ToDo from './components/ToDo/ToDo';
import style from './App.css'

class App extends Component {
  render() {
    return (
      <div className='todo-app'>
        <ToDo/>
      </div>
    );
  }
}

export default App;