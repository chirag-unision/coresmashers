import React, { Component } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default class Hookcard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color={this.props.color}>
                <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h7" component="span">
                {this.props.title}
            </Typography>
            <Typography><button className='snip'>{this.props.type==1?'Aptitute':'Technical Obj.'}</button></Typography>
            </TimelineContent>
            </TimelineItem>
        )
    }
}
