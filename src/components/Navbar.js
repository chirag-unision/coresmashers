import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state= {
            searchActive: false
        }
    }
    render() {
        // if(sessionStorage.getItem('loginStatus') != 100) {
        //     this.props.history.push('/');
        // }
        // const activeSearch= () => {
        //     this.setState({ searchActive: true });
        //     this.props.history.push('/Home/PeopleSearch');
        // }
        // const inactiveSearch= () => {
        //     this.setState({ searchActive: false});
        //     this.props.history.goBack();
        // }
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" href="#">CoreSmashers</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Home">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home/Profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home/Friends">Practice</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home/Hooks">Challanges</Link>
                        </li>
                        {/* <li className="nav-item">
                            <div className="d-flex">
                                <input type="text" className="form-control" onFocus={activeSearch} placeholder="Find People Here.." />&nbsp;
                                <button className="btn btn-success">Find</button>
                            </div>
                        </li> */}
                        </ul>
                    </div>
                </nav>
                
                <div className="container">

                </div>

            </>
        )
    }
}
export default  withRouter(Navbar);