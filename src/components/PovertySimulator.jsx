import React, { Fragment } from 'react';
import { Row, Col, Divider, Button } from 'antd'; 
import ReactPlayer from 'react-player';
import { ArrowDownOutlined } from '@ant-design/icons';


const PovertySimulator = () => {

    
    return(
        <div className="uw-project-main">
            <div id="slide-1" className="uw-project-slide">
                <div className="uw-project-slide-content">
                    <div className="justify">
                        <h1 className="uw-project-title">The Poverty Simulator</h1>
                        <p className="uw-project-para">
                            The Poverty Simulator was built in partnership with the United Way for a Capstone project at NAIT,
                            The Goal of the system was to build a digital version of a poverty simulation currently offered by the United Way;
                            with the ability to license the platform to other regions in North America.
                        </p>
                    </div>
                    <Row className="slide-1-bottom">
                        <Col span={12}>
                            <div className="partner-icons">
                                <h2 className="uw-project-title">Partners</h2>
                                <a href="https://www.nait.ca/dmit" target="_blank"><img src="https://static.eluta.ca/a4/pj/employer_logo_regular_universal_en_30c6db8d4e85f46f903941371515cef9.svg"/></a>
                                <a href="https://www.myunitedway.ca/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/95259662_2889289137773715_890721082695221248_n%20(1).png?alt=media&token=d3f6a6f0-6a60-46fe-b76a-4eabf650bde4"/></a>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="built-icons">
                                <h2 className="uw-project-title">Under the hood</h2>
                                <a href="https://reactjs.org/" target="_blank"><img src="https://img.icons8.com/color/48/000000/react-native.png"/></a>
                                <a href="https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"/></a>
                                <a href="https://azure.microsoft.com/en-ca/" target="_blank"><img src="https://image.flaticon.com/icons/svg/873/873107.svg" /></a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div id="slide-2" className="uw-project-slide justify">
                <div className="uw-project-slide-content">
                    <h2 className="uw-project-title">Viewing the Experience</h2>
                    <p className="uw-project-para">
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
                </div>
            </div>
            <div className="uw-project-slide justify">
                <div className="uw-project-slide-content">
                    <h2 className="uw-project-title">Regional Dashboard</h2>
                    <p className="uw-project-para">The Regional Admins have access to edit their own region, including Region Name &amp; location, Branding such as logo &amp; color, the hyperlinks for actionable buttons at the end of an experience
                        They also have the ability to create new experiences, activate experiences that are available; and add sponsors that appear before a user views an experience in their region.
                    </p>
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
                </div>
            </div>
            <div className="uw-project-slide justify">
                <div className="uw-project-slide-content">
                    <h2 className="uw-project-title">Building an Experience</h2>
                    <p className="uw-project-para">
                        The experiences can be long and include a number of different customizations for the creators, so it was important that the UI was easy to work with when designing new experiences. The interface included an editable canvas to allow the creators to 
                        plan their story lines, along with a powerful interface on the sidebar to edit the content within each element.
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
                </div>
            </div>
        </div>
    );
};

export default PovertySimulator;