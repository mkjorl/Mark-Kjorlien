import React from 'react';
import { PageHeader } from 'antd';

const AboutMe = (props) => {

    let changeView = props.changeView;
    
    return(
        <div className="about-name">
            <PageHeader
                className="site-page-header"
                onBack={() => changeView('home')}
                title="Home"
            />
        </div>
        
    )
};

export default AboutMe;