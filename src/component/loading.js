import React, { Component } from 'react'
import spinner from './spinner.gif'

export default class loading extends Component {
  render() {
    return (

      loading&&<div className='d-flex justify-content-center align-item-center'>
        <img src={spinner} alt='loading'></img>
        
      </div>
    )
  }
}
