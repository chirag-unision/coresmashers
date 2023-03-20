import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router';
import Postcard from './Postcard';
import {Post, Poll, Rate, Comment} from './posts/Post';
import ProfileAssist from './cards/ProfileAssist';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createAction: 'none',
            contentData: []
        }
        this.handlePostSuccess= this.handlePostSuccess.bind(this)
    }
    handlePostSuccess= ()=> {
        this.setState({ createAction: 'none' })
    }
    // componentDidMount() {
    //     const host= window.location.hostname;
    //     axios({
    //         method: 'post',
    //         url: `http://${host}:80/php/feeds.php`,
    //         data: { user: sessionStorage.getItem('validatedUser'), count: 10, lastid: 0 }
    //     })
    //     .then(result => {
    //         console.log(result.data);
    //         this.setState({ contentData: result.data.data })
    //     })
    //     .catch(
    //         // error => this.setState({ error: error.message })
    //         () => {
    //         alert('error')
    //         }
    //     );
    // }
    render() {
        const showCreateMenu= ()=> {
            document.getElementById('create-post-menu').classList.toggle('on-active');
        }
        const createPost= (param)=> {
            this.setState({ createAction : param})
        }
        return (
            <>
            {this.state.createAction === 'post' && <Route path= "/Home" component={()=> <Post handlePostSuccess={this.handlePostSuccess} />} />}
            {this.state.createAction === 'poll' && <Route path= "/Home" component={()=> <Poll handlePostSuccess={this.handlePostSuccess} />} />}
            {this.state.createAction === 'rate' && <Route path= "/Home" component={()=> <Rate handlePostSuccess={this.handlePostSuccess} />} />}
            {this.state.createAction === 'comment' && <Route path= "/Home" component={()=> <Comment handlePostSuccess={this.handlePostSuccess} />} />}
            {this.state.createAction === 'none' && 
            <>
                <div className="top-col">
                    <button className onClick={showCreateMenu}>Post</button>
                </div>
                <ProfileAssist />
                <div className="bottom-col">
                {this.state.contentData && this.state.contentData.map((element) => {
                    return <Postcard key={element.DIR_REFERANCE} id={element.ID} caption={element.POST_CAPTION} mediaFiles={element.media_files} type={element.POST_TYPE} data={element.POST_DATA} style={this.style} />
                })}
                </div>
                <div className="create-post-menu" id="create-post-menu">
                    <div className="create-btn" onClick={() => createPost('post')}>Post</div>
                    <div className="create-btn" onClick={() => createPost('poll')}>Poll</div>
                    <div className="create-btn" onClick={() => createPost('rate')}>Rate</div>
                    <div className="create-btn" onClick={() => createPost('comment')}>Comment</div>
                </div>
            </>
            }
            </>
        )
    }
}
