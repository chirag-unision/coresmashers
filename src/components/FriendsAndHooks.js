import React, { Component } from 'react'
import Friendcard from './cards/Friendcard'
import Hookcard from './cards/Hookcard'
import loader from '../media/loader.gif'
import axios from 'axios'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export class Friends extends Component {
    render() {
        return (
            <div stylw={{'display': 'flex'}}>
                <Friendcard />
                <Friendcard />
                <Friendcard />
            </div>
        )
    }
}

export class Hooks extends Component {
    constructor(props) {
        super(props);
        this.state= {
            loading: false,
            Data: [1,2,3]
        }
    }
    componentDidMount() {
        const host= window.location.hostname;
        axios({
            method: 'post',
            url: `http://${host}:80/php/addtohooks.php`,
            data: { user: sessionStorage.getItem('validatedUser') }
        })
        .then(result => {
            console.log(result)
            if(result.data.status === 100) {
                this.setState({ Data: result.data.data })
                this.setState({ loading: false })
            }
        })
        .catch(
            // error => this.setState({ error: error.message })
            () => {
            alert('error')
            }
        );
    }
    render() {
        return (
            <div>
                <div>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                </Timeline>
                </div>
                { this.state.loading && <img style={{width: '40px'}} src={loader} /> }
                { this.state.Data && this.state.Data.map((element)=> {
                    return <Hookcard />
                })}
            </div>
        )
    }
}

export class PeopleSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            loading: true,
            newSuggestions: []
        }
        this.setHooks= this.setHooks.bind(this);
    }
    setHooks(hookID, source) {
        const host= window.location.hostname;
        axios({
            method: 'post',
            url: `http://${host}:80/php/addtohooks.php`,
            data: { user: sessionStorage.getItem('validatedUser'), hookto: hookID, source: source}
        })
        .then(result => {
            console.log(result)
            if(result.data.status === 1900) {
                this.setState({ newSuggestions: result.data.data })
                this.setState({ loading: false })
            }
        })
        .catch(
            // error => this.setState({ error: error.message })
            () => {
            alert('error')
            }
        );
    }
    componentDidMount() {
        const host= window.location.hostname;
        axios({
            method: 'post',
            url: `http://${host}:80/php/newsuggestions.php`
        })
        .then(result => {
            if(result.data.status === 100) {
                this.setState({ newSuggestions: result.data.data })
                this.setState({ loading: false })
            }
        })
        .catch(
            // error => this.setState({ error: error.message })
            () => {
            alert('error')
            }
        );
    }
    render() {
        return (
            <div style={{minHeight: '500px'}}>
                { this.state.loading && <img style={{width: '40px'}} src={loader} /> }
                { this.state.newSuggestions && this.state.newSuggestions.map((element)=> {
                    return  <div className="d-flex flex-column" key={element.USER_ID}>
                                <img style={{width: '50px'}} src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?w=198&h=187&c=7&r=0&o=5&pid=1.7" />
                                <span>{element.USER_ID}</span>
                                <button className="btn btn-outline-primary" onClick={()=> this.setHooks(element.USER_ID, 'newsuggest')}>Hook Me</button>
                            </div>
                })}
            </div>
        )
    }
}