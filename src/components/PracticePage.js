import React, { Component } from 'react'
import QueSheet from './QueSheet'
import TabNavigator from './TabNavigator'


export default class PracticePage extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className='d-flex flex-column w-100 p-2'>
        <TabNavigator data= {this.props.data} />
        <div>
            <QueSheet />
        </div>
        
      </div>
    )
  }
}
