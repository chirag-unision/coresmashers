import React, { Component } from 'react'

export default class Hookcard extends Component {
    render() {
        return (
            <div className="friend-card p-3 m-2">
                <img src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?w=198&h=187&c=7&r=0&o=5&pid=1.7" />
                <span>Chirag kaushik</span>
                <button className="btn btn-outline-light">Remove Hook</button>
            </div>
        )
    }
}
