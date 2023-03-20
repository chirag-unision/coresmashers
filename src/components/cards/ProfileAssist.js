import React, { Component } from 'react';

export default class ProfileAssist extends Component {
  render() {
    return (
        <div className>
            <p>Hey! How are you?</p>
            <div><span>What's your name?</span><input type="text" /></div>
            <div><span>Your Birthday?</span><input type="text" /></div>
            <div><span>Your Gender?</span><input type="text" /></div>
        </div>
    )
  }
}
