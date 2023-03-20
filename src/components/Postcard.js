import axios from 'axios';
import React, { Component } from 'react'

export default class Postcard extends Component {
    constructor(props) {
        super(props);
        const validUser= sessionStorage.getItem('validatedUser')
        let check= JSON.parse(this.props.data).responder.find((element)=> {
            if(element == validUser) { return true; }
        })
        this.state= {
            likebtncolor: check ? 'lawngreen' : 'white',
            user: validUser
        }
        this.hitLike= this.hitLike.bind(this);
    }
    hitLike= (pid)=> {
        let newcolor= (this.state.likebtncolor === 'white') ? 'lawngreen' : 'white';
        const host= window.location.hostname;
        axios({
            method: 'post',
            url: `http://${host}:80/php/like_post.php`,
            data: { user: this.state.user, pid: pid }
        })
        .then(result => {
            console.log(result.data);
            if(result.data.status === 100)
            this.setState({likebtncolor: newcolor})
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
        <div className="post-card">
            <div className="post-header">
                <img src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?w=198&h=187&c=7&r=0&o=5&pid=1.7" />
                <div>
                    <p>Ananya</p>
                    <p>~ 60 minutes ago</p>
                </div>
            </div>
            <div className="post-content">
                <div className="" style={{padding: '10px'}}>{this.props.caption}</div>
                <div className="">
                    {this.props.mediaFiles.map((element)=> {
                    return <img src={element} style={{width: '50%'}} />
                    })}
                </div>
            </div>
            <div className="post-action">
                {this.props.type === 'sr' && 
                    <div style={{fontSize: 'xx-large'}}>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                }
                {this.props.type === 'spp' && 
                    <div>
                        <i className='fa fa-thumbs-o-up p-1' style={{fontSize: '20px', color: this.state.likebtncolor}} onClick={()=> {this.hitLike(this.props.id)}}></i>
                        <i className='fa fa-commenting-o p-1' style={{fontSize: '20px'}}></i>
                    </div>
                }
                {this.props.type === 'ss' && 
                    <p>Suggest Something!</p>
                }
            </div>
        </div>
        )
    }
}
