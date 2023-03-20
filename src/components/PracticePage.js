import React, { Component } from 'react'
import QueSheet from './QueSheet'
import TabNavigator from './TabNavigator'


export default class PracticePage extends Component {
  render() {
    return (
      <div className='d-flex flex-column'>
        <TabNavigator data= {this.props.data} />
        <div>
            <QueSheet />
        </div>
        
      </div>
    )
  }
}
