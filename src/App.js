import React, { Component } from 'react';

import './App.css';

import Home from './components/Home';
import Information from './components/Information';
import Pictures from './components/Pictures';


export default class App extends Component {
  render(){
    return(
      <div>
      <Home/>
      <Information/>
      <Pictures/>
      

      </div>
    )
  }
}