import React, { Component } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default class Hookcard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{this.props.title}</TimelineContent>
            </TimelineItem>
        )
    }
}
