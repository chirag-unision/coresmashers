import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Friendcard from './cards/Friendcard'
import Hookcard from './cards/Hookcard'
import loader from '../media/loader.gif'
import axios from 'axios'
import Timeline from '@mui/lab/Timeline';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PracticePage from './PracticePage';

export class Friends extends Component {
    constructor(props) {
        super(props);
        this.aptiSet= {
            "Strength of Materials": "{}", 
            "Thermodynamics": "{}", 
            "Hydraulics and Fluid Mechanic": "{}", 
            "Heat Transfer, Refrigeration and Air Conditioning": "{}"
            }
        this.objSet= {
            "Strength of Materials": "{}", 
            "Thermodynamics": "{}", 
            "Hydraulics and Fluid Mechanic": "{}", 
            "Heat Transfer, Refrigeration and Air Conditioning": "{}"
            }
        this.subSet= {
            "Strength of Materials": "{}", 
            "Thermodynamics": "{}", 
            "Hydraulics and Fluid Mechanic": "{}", 
            "Heat Transfer, Refrigeration and Air Conditioning": "{}"
            }
    }
    render() {
        return (
            <div className='d-flex justify-content-around'>
            <Switch>
                <Route exact path="/Home/Practice/">
                    <Friendcard title="Aptitute Q's" uri="apti" />
                    <Friendcard title="Technical Objectives" uri="objective" />
                    <Friendcard title="Technical Subjectives" uri="subjective" />
                </Route>
                <Route path="/Home/Practice/apti" component={()=> <PracticePage data={this.aptiSet} />} />
                <Route path="/Home/Practice/objective" component={()=> <PracticePage data={this.objSet} />} />
                <Route path="/Home/Practice/subjective" component={()=> <PracticePage data={this.subSet} />} />
            </Switch>
            </div>
        )
    }
}

export class Hooks extends Component {
    constructor(props) {
        super(props);
        this.state= {
            loading: false,
            Data: [1,2,3],
            expanded: false
        }
        this.handleChange= this.handleChange.bind(this);
    }
  
    handleChange = (panel) => (event, isExpanded) => {
      this.setState({expanded: (!this.state.expanded ? panel : false)});
    };
  
    // componentDidMount() {
    //     const host= window.location.hostname;
    //     axios({
    //         method: 'post',
    //         url: `http://${host}:80/php/addtohooks.php`,
    //         data: { user: sessionStorage.getItem('validatedUser') }
    //     })
    //     .then(result => {
    //         console.log(result)
    //         if(result.data.status === 100) {
    //             this.setState({ Data: result.data.data })
    //             this.setState({ loading: false })
    //         }
    //     })
    //     .catch(
    //         // error => this.setState({ error: error.message })
    //         () => {
    //         alert('error')
    //         }
    //     );
    // }
    render() {
        return (
            <div>
                <div className='d-flex'>
                    <div className='' style={{'width':'50%',}}>
                    <Timeline>
                    { this.state.loading && <img style={{width: '40px'}} src={loader} /> }
                    { this.state.Data && this.state.Data.map((element)=> {
                        return <Hookcard key={1} title={'challange mech #01'} color={'primary'} />
                    })}
                    </Timeline>
                    </div>
                    <div className='' style={{'width':'50%'}}>
                    <Timeline>
                    { this.state.loading && <img style={{width: '40px'}} src={loader} /> }
                    { this.state.Data && this.state.Data.map((element)=> {
                        return <Hookcard key={1} title={'challange mech #01'} color={'warning'} />
                    })}
                    </Timeline>
                    </div>
                </div>
                <div>
                <Accordion expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        You are currently not an owner
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={this.state.expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={this.state.expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
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