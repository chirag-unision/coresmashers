import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Timeline from './Timeline';
import Profile from './Profile';
import { Friends, Hooks, PeopleSearch } from './FriendsAndHooks';
import ProfileView from './ProfileView';

export default class Homepage extends Component {
    render() {
        return (
            <>
            <div className>
                <Navbar />
                <div className="dom-container">
                    <Switch>
                        <Route exact path="/Home" component={()=> <Timeline />} />
                        {/* <Route path="/Home/:userid" component={()=> <ProfileView />} /> */}
                        <Route path="/Home/Profile" component={()=> <Profile />} />
                        <Route path="/Home/Friends" component={()=> <Friends />} />
                        <Route path="/Home/Hooks" component={()=> <Hooks />} />
                        <Route path="/Home/PeopleSearch" component={()=> <PeopleSearch />} />
                    </Switch>
                </div>
            </div>
            </>
        )
    }
}
