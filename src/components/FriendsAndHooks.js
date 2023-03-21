import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Friendcard from './cards/Friendcard'
import Hookcard from './cards/Hookcard'
import loader from '../media/loader.gif'
import axios from 'axios'
import Timeline from '@mui/lab/Timeline';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import PracticePage from './PracticePage';

export class Friends extends Component {
    constructor(props) {
        super(props);
        this.aptiSet= {
            "Data Interpretation": "{}", 
            "Inequalities": "{}", 
            "Arithmetic Aptitude": "{}", 
            "Number Series": "{}"
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
                <Route path="/Home/Practice/apti" component={()=> <PracticePage data={this.aptiSet} />} type="apti" />
                <Route path="/Home/Practice/objective" component={()=> <PracticePage data={this.objSet} />} type="obj" />
                <Route path="/Home/Practice/subjective" component={()=> <PracticePage data={this.subSet} />} type="sub" />
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
            Data: [1,2,3]
        }
    }
  
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
                <h5>Ongoing Challenges</h5>
                <div className='d-flex justify-content-around'>
                { this.state.loading && <img style={{width: '40px'}} src={loader} /> }
                    { this.state.Data && this.state.Data.map((element)=> {
                        return <Link to="/ChallangeLive"><Card sx={{ minWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="40"
                            image="https://th.bing.com/th/id/OIP.UdYomSLbUGPN1F8J4wHxRQHaEo?pid=ImgDet&rs=1"
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <h5>Challenge Fluids #19</h5>
                                <p>Duration: 60 mins</p>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card></Link>
                    })}
                
                </div>
                <div className='d-flex'>
                    <div className='' style={{'width':'50%',}}>
                    <h5>Upcoming Challenges</h5>
                    <Timeline>
                    { this.state.loading && <img style={{width: '40px'}} src={loader} /> }
                    { this.state.Data && this.state.Data.map((element)=> {
                        return <Hookcard key={1} title={'challange mech #01'} color={'primary'} />
                    })}
                    </Timeline>
                    </div>
                    <div className='' style={{'width':'50%'}}>
                    <h5>Past Challenges</h5>
                    <Timeline>
                    { this.state.loading && <img style={{width: '40px'}} src={loader} /> }
                    { this.state.Data && this.state.Data.map((element)=> {
                        return <Hookcard key={1} title={'challange mech #01'} color={'warning'} />
                    })}
                    </Timeline>
                    </div>
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