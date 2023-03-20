import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="profile-main" style={{display:"flex",padding:"5px"}}>
                    <div style={{width:"30%",height:"100%",marginTop:"5px"}}>
                            <div >
                                <input type="file" id="dp" accept=".jpg" style={{display: "none"}} />
                                <div className="inner-cover">
                                    <label for="dp"><div className="edit-tool">Change</div></label>
                                    <img src="https://i.pinimg.com/originals/39/68/30/3968307c65388d25eb047b6f318aa538.jpg" />
                                </div>
                            </div>
                            <div className={"my-3"}>
                                <h3 style={{display:"inline"}}>Chirag kaushik</h3>
                                <div>
                                    <span className="bg-danger text-white p-1 m-1 rounded">1034</span>
                                    <span className="bg-success text-white p-1 m-1 rounded">D3</span>
                                    <span className="bg-primary text-white p-1 m-1 rounded">MECH</span>
                                </div>
                            </div>
                    </div>
                    <div className="profile-column" style={{display:"inline", textAlign:"left", width:"fit-content"}}>
                        <div className="info">
                            
                            <div className="info-col">
                                <span>Institute</span>
                                <p className={"my-0"}>J.C. Bose University of Science and Technology, YMCA, Faridabad</p>
                            </div>
                            <div className="info-col">
                                <span>Gender</span>
                                <p className={"my-0"}>Male</p>
                            </div>
                            <div className="info-col">
                                <span>Birthday</span>
                                <p className={"my-0"}>24th of September (19 Y/O 24/09/02)</p>
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
