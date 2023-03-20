import React, { Component } from 'react';
// import { QueSheet } from './QueSheet'
import TabNavigator from './TabNavigator';

export default class PracticePage extends Component {
  render() {
    return (
      <div>
        <TabNavigator data = {{1:"Chirag",2:"Sourav",3:"Ankan",4:"Aditya"}}/>

        {/*<QueSheet />*/}
      </div>
    )
  }
}
