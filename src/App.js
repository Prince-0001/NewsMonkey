
import './App.css';
import News from './component/news';
import Navbar from './component/nabvar';

import React, { Component } from 'react'

export default class App extends Component {
  
  
  render() {
    return (
      <div>
        <Navbar/>
        <News pagesize={12} />
      </div>
     
    )
  }
}


