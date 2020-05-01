import React, { useEffect } from 'react';
import { GithubOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Home = (props) => {

    useEffect(() => {
        gsap.fromTo(".home-main", {autoAlpha: 0}, {autoAlpha: 1, duration: 2});
    });

    return(
        <div className="home-main">
            <img className="avatar" src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/avatar.png?alt=media&token=83f7accf-5bf3-43c9-9572-8ed886a1c5e7"/>
            <h1>Mark Kjorlien</h1>
            <p className="home-stats">Developer | Hobbyist | Athlete</p>
            <div className="home-options">
                <div className="home-option">
                    <Link to="/Mark-Kjorlien/About">
                        <UserOutlined style={{fontSize: '4em'}}/>
                        <p>About Me</p>
                    </Link>
                </div>
                <div className="home-option middle-option">
                    <Link to="/Mark-Kjorlien/Projects">
                        <GithubOutlined style={{fontSize: '4em'}}/>
                        <p>My Projects</p>
                    </Link>
                </div>
                <div className="home-option">
                    <Link to="/Mark-Kjorlien/Contact">
                        <MailOutlined style={{fontSize: '4em'}}/>
                        <p>Contact Me</p>
                    </Link>
                </div>
            </div>
        </div>
    );
    
}

export default Home;