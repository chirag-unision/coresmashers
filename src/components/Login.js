import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { CircularProgress } from '@mui/material';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false,
            errMsg: '',
            formTitle: 'Sign In',
            signupMode: false,
            apiURL: this.props.api.signin_api,
            auth: false,
            loader: false
        }
        this.inputElement = ['username', 'Password']
    }
    render() {
        if(sessionStorage.getItem('authtoken')) {
            this.props.history.push('/Home');
        }
        const crlChange= (e, fieldName) => {
            switch(fieldName) {
            case 'username':
                this.setState({ username: e.target.value });
                break;
            case 'Password':
                this.setState({ password: e.target.value });
                break;
            }
        }
        const handleFormSubmit = e => {
            e.preventDefault();
            if(this.state.username && this.state.password) {
                // Check Email Format
                const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                this.emailCheck= emailFormat.test(this.state.username);

                // Check Mob Format
                const mobFormat = /^[6-9]\d{9}$/gi;
                this.mobCheck= mobFormat.test(this.state.username);

                if(this.emailCheck | this.mobCheck) {
                    this.setState({ error: false });
                    const host= window.location.hostname;
                    (this.emailCheck ? this.uType= 'e' : this.uType= 'm');
                    axios({
                        method: 'post',
                        url: this.state.apiURL,
                        data: { username: this.state.username, password: this.state.password, type: this.uType }
                    })
                    .then(result => {
                        if(result.data.status == 100) {
                            sessionStorage.setItem('loginStatus', result.data.status);
                            sessionStorage.setItem('validatedUser', result.data.user);
                            this.props.history.push('/Home');
                        }
                    })
                    .catch(
                        // error => this.setState({ error: error.message })
                        () => {
                        alert('error')
                        }
                    );
                } else {
                    this.setState({error: true, errMsg: 'Invalid Email Address or Mobile Number'});
                }
            } else {
                this.setState({ error: true, errMsg: 'Enter Your Username and Password Carefully.' })
            }
        }
        const changeSignMode= () => {
            if(this.state.signupMode) {
                this.setState({ signupMode: false, formTitle: 'Sign In', apiURL: this.props.api.signin_api });
            } else {
                this.setState({ signupMode: true, formTitle: 'Sign Up', apiURL: this.props.api.signup_api });
            }
        }

        return (
            <>
            <div className="App-header">
                <div id="sign-up" className="sign-up-form inactive">
                    <p className="text-white">{this.state.formTitle}</p>
                    {/* <input type="text" className="form-control" placeholder="Username" onChange={e => crlChange(e, this.inputElement[0])} />
                    <input type="password" className="form-control" placeholder="Password" onChange={e => crlChange(e, this.inputElement[1])} />
                    <button className="btn btn-success" onClick={handleFormSubmit}>Let's Go</button> */}
                    {this.state.error && <div className="alert alert-danger">{this.state.errMsg}</div>}
                    <p style={{ cursor: 'pointer', fontSize: 'medium' }} onClick={changeSignMode}>
                        {/* {this.state.signupMode ? <React.Fragment>Already have account? Sign In</React.Fragment> : <React.Fragment>Don't have account? Sign Up</React.Fragment> } */}
                    </p>
                    {this.state.loader && <CircularProgress color="secondary" />}
                    <GoogleLogin onSuccess={async(token) => {
                        const data = jwtDecode(token.credential);
                        console.log(data);

                        this.setState({loader: true});
                        const res = await axios.post("https://core-smashers-api.onrender.com/api/auth/login", {
                            name: data.name,
                            provider_id: data.sub,
                            email: data.email
                        });
                        console.log(res.data);
                        sessionStorage.setItem("authtoken", res.data.authToken);
                        this.setState({auth: true, username: data.name});
                    }} onError={() => console.log("none")} />
                {/* <button className="text-dark" onClick={handleFormSubmit}>Submit</button> */}
                </div>
            </div>
            </>
        )
    }
}
export default withRouter(Login);