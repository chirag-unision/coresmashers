import axios from 'axios';
import React, { Component } from 'react';
import MediaSelector from './MediaSelector';

export class Post extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user: sessionStorage.getItem('validatedUser'),
            postCaption: '',
            postType: 'spp',
            postData: '{"likes_count":0,"responder":[],"comment":[]}',
            selectedMedia: '',
            error: true
        }
        this.handleMediaChange = this.handleMediaChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
    }
    handleMediaChange(e) {
        this.setState({ selectedMedia: e.target.files })
    }
    handleCaptionChange(e) {
        this.setState({ postCaption: e.target.value })
    }
    render() {
        const submitfunc= (e)=> {
            e.preventDefault();
            let data= new FormData();
            data.append("user", this.state.user)
            data.append("post_caption", this.state.postCaption)
            data.append("post_type", this.state.postType)
            data.append("post_data", this.state.postData)
            for (let i = 0; i < this.state.selectedMedia.length; i++) {
                data.append("media-upload[]", this.state.selectedMedia[i]);
            }
            if(this.state.postCaption !== '' | this.state.selectedMedia !=='') {
                this.setState({ error: false });
                const host= window.location.hostname;
                axios({
                    method: 'post',
                    url: `http://${host}:80/php/simplepost.php`,
                    data: data
                })
                .then(result => {
                    console.log(result.data);
                    if(result.data.status === 100)
                    this.props.handlePostSuccess()
                })
                .catch(
                    // error => this.setState({ error: error.message })
                    () => {
                    alert('error')
                    }
                );
            } else {
                this.setState({ error: true })
            }
        }
        return (
            <form id="form">
                <div className="caption-box">
                    <input type="text" class="input-box" id="caption-text" name="post_caption" onChange={this.handleCaptionChange} placeholder="Type something here" />
                </div>
                <hr color="grey" />
                <MediaSelector handleMediaChange={this.handleMediaChange} />
                <button onClick={submitfunc} className="btn btn-success">Post</button>
            </form>
        )
    }
}

export class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: sessionStorage.getItem('validatedUser'),
            postCaption: '',
            postType: 'poll',
            postData: '{"response_count":0,responses:[],"responder":[]}',
            selectedMedia: '',
            error: true,
            pollData: [],
            check: false
        }
    }
    render() {
        const createOption= () => {
            let data= document.getElementById('xlsrr').value;
            if(data !== '') {
                this.state.pollData.push(data);
                this.setState({ check : false});
            }
        }
        const changeCheck= ()=> {
            if(!this.state.check)
            this.setState({ check : true})
        }
        const delEntry= (key)=> {
            this.state.pollData.splice(key, 1)
            this.setState({ check : false});
        }
        // const createFile= (num) => {
        //    let file= document.createElement('input')
        //    let div= document.getElementsByClassName('create-option')[0]
        //     file.setAttribute('type', 'file')
        //     file.setAttribute('id', 'poll-img'+num)
        //     file.setAttribute('name', 'poll-img[]')
        //     div.append(file);
        //     file.click();
        // }
        return (
            <div>
                <div className="caption-box">
                    <input type="text" class="input-box"  placeholder="Type something here" />
                </div>
                <hr color="grey" />
                <MediaSelector />
                <div className="poll-opt-box">
                    <div className="poll-options">
                    {this.state.pollData.map((element, i=0) => {
                        return <p>{element}<i className="fa fa-times" onClick={()=> {delEntry(i++)}}></i></p>
                    })}
                    </div>
                    <div className="create-option">
                        {!this.state.check && <p onClick={changeCheck}>Create Option
                        {/* <button className="btn btn-success" onClick={changeCheck}>Text</button> */}
                        {/* <button className="btn btn-primary" onClick={createFile}>Image</button> */}
                        </p>}
                        { this.state.check && <React.Fragment><input type="text" id="xlsrr" autoFocus /><i className="fa fa-check" onClick={createOption}></i></React.Fragment> }
                    </div>
                </div>
                <button className="btn btn-success">Post</button>
            </div>
        )
    }
}

export class Rate extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user: sessionStorage.getItem('validatedUser'),
            postCaption: '',
            postType: 'sr',
            postData: '{"response_count":0,"responder":[]}',
            selectedMedia: '',
            error: true
        }
        this.handleMediaChange = this.handleMediaChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
    }
    handleMediaChange(e) {
        this.setState({ selectedMedia: e.target.files })
    }
    handleCaptionChange(e) {
        this.setState({ postCaption: e.target.value })
    }
    render() {
        const submitfunc= (e)=> {
            e.preventDefault();
            let data= new FormData();
            data.append("user", this.state.user)
            data.append("post_caption", this.state.postCaption)
            data.append("post_type", this.state.postType)
            data.append("post_data", this.state.postData)
            for (let i = 0; i < this.state.selectedMedia.length; i++) {
                data.append("media-upload[]", this.state.selectedMedia[i]);
            }
            if(this.state.postCaption !== '' | this.state.selectedMedia !=='') {
                this.setState({ error: false });
                const host= window.location.hostname;
                axios({
                    method: 'post',
                    url: `http://${host}:80/php/simplepost.php`,
                    data: data
                })
                .then(result => {
                    console.log(result.data);
                    if(result.data.status === 100)
                    this.props.handlePostSuccess()
                })
                .catch(
                    // error => this.setState({ error: error.message })
                    () => {
                    alert('error')
                    }
                );
            } else {
                this.setState({ error: true })
            }
        }
        return (
            <div>
                <div className="caption-box">
                    <input type="text" class="input-box" id="caption-text" name="post_caption" onChange={this.handleCaptionChange} placeholder="Type something here" />
                </div>
                <hr color="grey" />
                <MediaSelector handleMediaChange={this.handleMediaChange} />
                <button onClick={submitfunc} className="btn btn-success">Post</button>
            </div>
        )
    }
}

export class Comment extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user: sessionStorage.getItem('validatedUser'),
            postCaption: '',
            postType: 'ss',
            postData: '{"response_count":0,"responder":[]}',
            selectedMedia: '',
            error: true
        }
        this.handleMediaChange = this.handleMediaChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
    }
    handleMediaChange(e) {
        this.setState({ selectedMedia: e.target.files })
    }
    handleCaptionChange(e) {
        this.setState({ postCaption: e.target.value })
    }
    render() {
        const submitfunc= (e)=> {
            e.preventDefault();
            let data= new FormData();
            data.append("user", this.state.user)
            data.append("post_caption", this.state.postCaption)
            data.append("post_type", this.state.postType)
            data.append("post_data", this.state.postData)
            for (let i = 0; i < this.state.selectedMedia.length; i++) {
                data.append("media-upload[]", this.state.selectedMedia[i]);
            }
            if(this.state.postCaption !== '' | this.state.selectedMedia !=='') {
                this.setState({ error: false });
                const host= window.location.hostname;
                axios({
                    method: 'post',
                    url: `http://${host}:80/php/simplepost.php`,
                    data: data
                })
                .then(result => {
                    console.log(result.data);
                    if(result.data.status === 100)
                    this.props.handlePostSuccess()
                })
                .catch(
                    // error => this.setState({ error: error.message })
                    () => {
                    alert('error')
                    }
                );
            } else {
                this.setState({ error: true })
            }
        }
        return (
            <div>
                <div className="caption-box">
                    <input type="text" class="input-box" id="caption-text" name="post_caption" onChange={this.handleCaptionChange} placeholder="Type something here" />
                </div>
                <hr color="grey" />
                <MediaSelector handleMediaChange={this.handleMediaChange} />
                <button onClick={submitfunc} className="btn btn-success">Post</button>
            </div>
        )
    }
}
