import React, { Fragment } from 'react';
import { Row, Col, Divider } from 'antd'; 
import ReactPlayer from 'react-player';

const PovertySimulator = () => {
    return(
        <Fragment>
            
            <Row>
                <Col>
                    <h1 style={{paddingBottom:20}}>The United Way Poverty Simulator</h1>
                    <p className="uw-project-para">
                        The Poverty Simulator was built in partnership with the United Way for my computer software development Capstone project at NAIT,
                        The Goal of the system was to build a digital version of a poverty simulation currently offered by the United Way Edmonton Capital 
                        Region; with ability to license the platform to other regions in North America learn more about the poverty simulation <a href="https://www.myunitedway.ca/poverty-simulation/">here</a>
                    </p>
                    <div className="built-icons">
                        <h2 className="uw-project-title">Built with</h2>
                        <a href="https://reactjs.org/"><img src="https://img.icons8.com/color/48/000000/react-native.png"/></a>
                        <a href="https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"/></a>
                        <a href="https://azure.microsoft.com/en-ca/"><img src="https://image.flaticon.com/icons/svg/873/873107.svg"/></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="uw-project-title">Viewing the Experience</h2>
                    <p style={{width:'70%', margin:'0 auto', fontSize:'1.5em'}}>
                        The Poverty simulator is a choose your own adventure, after viewing a short video or image, choices are presented
                        and each choice has concequences, such as lowered health or increased hunger along with changes to the storyline. 
                        At the end of the storyline a conclusion is generated based on the choices made.
                    </p>
                    <div className="video-wrapper">
                            <ReactPlayer
                            url="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/bandicam%202020-04-23%2013-32-13-251.mp4?alt=media&token=612f9cd9-d417-446e-99c3-b3fe7c5cd604"
                            width="100%"
                            height="100%"
                            className="player"
                            volume="0"
                            controls
                            />
                    </div>
                </Col>
               
            </Row>
            <Row>
                <Col>
                    <h2 className="uw-project-title">Regional Dashboard</h2>
                    <p className="uw-project-para">In order to allow the team at the United Way to create experiences and license the platform wherever necessary; An administrative system needed to be made.
                        The system requires two roles, Super &amp; Regional Admins. The Regional Admins only have access to edit their own region, including Region Name &amp; location, Branding such as logo &amp; color, the hyperlinks for actionable buttons at the end of an experience
                        They also have the ability to create new experiences &amp; decide if they are available to other regions, activate experiences that are available and add sponsors that appear before a user views an experience in their region.
                        Super Admins can edit or create any region along with the ability to edit any experience</p>
                    <div className="video-wrapper">
                            <ReactPlayer
                            url="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/bandicam%202020-04-23%2013-19-41-558.mp4?alt=media&token=406aadc8-dd14-448f-9a56-de667cf2cf4f"
                            width="100%"
                            height="100%"
                            className="player"
                            volume="0"
                            controls
                            />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="uw-project-title">Building an Experience</h2>
                    <p className="uw-project-para">
                        The experiences can be long and include a number of different customizations for the creators, so it was important that the UI was easy to work with when designing new experiences. The interface included an editable canvas to allow the creators to 
                        plan their story lines, along with a powerful interface on the sidebar to edit the content within each element. We didnt include any validation until experiences are
                    </p>
                    <div className="video-wrapper">
                            <ReactPlayer
                            url="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/bandicam%202020-04-23%2013-03-25-067.mp4?alt=media&token=7718e808-2f1b-46a9-b023-6b32daf84409"
                            width="100%"
                            height="100%"
                            className="player"
                            volume="0"
                            controls
                            />
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default PovertySimulator;