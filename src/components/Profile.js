import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="profile-main">
                    <div className="">
                        <div className="dp">
                            <input type="file" id="dp" accept=".jpg" style={{display: "none"}} />
                            <div className="inner-cover">
                                <label for="dp"><div className="edit-tool">Change</div></label>
                                <img src="https://i.pinimg.com/originals/39/68/30/3968307c65388d25eb047b6f318aa538.jpg" />
                            </div>
                        </div>
                        {/* <img src="https://th.bing.com/th/id/OIP.2dgHRC1LGuuPAnGbOLJpmQAAAA?pid=ImgDet&w=363&h=363&rs=1" /> */}
                        <h3>Chirag kaushik</h3>
                        <div className>
                            <span className="bg-danger text-white p-1 m-1 rounded">M</span>
                            <span className="bg-success text-white p-1 m-1 rounded">19</span>
                            <span className="bg-primary text-white p-1 m-1 rounded"><i class="fa fa-birthday-cake" aria-hidden="true"></i> September, 24</span>
                        </div>
                        <div className="social-status-box"></div>
                    </div>
                    <div className="info-box">
                        <div className>
                            <p>Home</p>
                        </div>
                        <div className>
                            <p>Education</p>
                        </div>
                        <div className>
                            <p>Education</p>
                        </div>
                    </div>
                    <div className="profile-column">
                        <div className="info">
                            <div className="info-col">
                                <span>Name</span>
                                <p>Chirag</p>
                            </div>
                            <div className="info-col">
                                <span>Institute</span>
                                <p>J.C. Bose University of Science and Technology, YMCA, Faridabad</p>
                            </div>
                            <div className="info-col">
                                <span>Gender</span>
                                <p>Male</p>
                            </div>
                            <div className="info-col">
                                <span>Birthday</span>
                                <p>24th of September (19 Y/O 24/09/02)</p>
                            </div>
                            <div className="info-col">
                                <span>Mobile Number</span>
                                <p>+91-89304-69872</p>
                            </div>
                            <div className="info-col">
                                <span>Email Address</span>
                                <p>sharmacj123@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
