import React from 'react';
import { PageHeader } from 'antd';

const AboutMe = (props) => {

    let changeView = props.changeView;
    
    return(
        <div className="about-main">
            <PageHeader
                className="site-page-header"
                onBack={() => changeView('home')}
                title="Home"
            />

            <div className="about-main">
                <h1>Get to know the guy behind the code</h1>
            </div>
        </div>
        
    )
};

export default AboutMe;