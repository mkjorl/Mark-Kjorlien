import React from 'react';
import { GithubOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

const Home = (props) => {

    let changeView=props.changeView;

    return(
        <div className="home-main">
            <img className="avatar" src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/avatar.png?alt=media&token=83f7accf-5bf3-43c9-9572-8ed886a1c5e7"/>
            <h1>Mark Kjorlien</h1>
            <p>Developer | Athlete | Hobbyist</p>
            <div className="home-options">
                <div className="home-option" onClick={() => changeView('about')}>
                    <UserOutlined style={{fontSize: '4em'}}/>
                    <p>About Me</p>
                </div>
                <div className="home-option middle-option" onClick={() => changeView('projects')}>
                    <GithubOutlined style={{fontSize: '4em'}}/>
                    <p>My Projects</p>
                </div>
                <div className="home-option" onClick={() => changeView('contact')}>
                    <MailOutlined style={{fontSize: '4em'}}/>
                    <p>Contact Me</p>
                </div>
            </div>
        </div>
    );
    
}

export default Home;