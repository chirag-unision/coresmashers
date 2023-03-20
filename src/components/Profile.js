import { Button, ButtonGroup } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="profile-main" style={{display:"flex",padding:"5px"}}>
                    <div style={{width:"fit-content",margin:"10px 20px"}}>
                            <div >
                                <input type="file" id="dp" accept=".jpg" style={{display: "none"}} />
                                <div className="inner-cover">
                                    <label for="dp"><div className="edit-tool">Change</div></label>
                                    <img src="https://i.pinimg.com/originals/39/68/30/3968307c65388d25eb047b6f318aa538.jpg" />
                                </div>
                            </div>
                            <div className={"my-3"}>
                                <h4 style={{display:"inline"}}>Chirag kaushik</h4>
                                <div>
                                    <ButtonGroup variant="text" aria-label="text button group">
                                        <Button>1442</Button>
                                        <Button>5⭐</Button>
                                        <Button>D1</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                    </div>
                    <div className="profile-column" style={{display:"inline", textAlign:"left", width:"fit-content"}}>
                        <div className="info">
                        <div className="info-col">
                                <span>Username</span>
                                <p className={"my-0"}>Adistinx</p>
                            </div>
                            <div className="info-col">
                                <span>Institute</span>
                                <p className={"my-0"}>J.C. Bose University of Science and Technology, YMCA, Faridabad</p>
                            </div>
                            <div className="info-col">
                                <span>Course</span>
                                <p className={"my-0"}>Mechanical Engineering</p>
                            </div>
                            <div className="info-col">
                                <span>Mobile Number</span>
                                <p className={"my-0"}>+91-89304-69872</p>
                            </div>
                            <div className="info-col">
                                <span>Email Address</span>
                                <p className={"my-0"}>sharmacj123@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
