import React from 'react';
import { PageHeader } from 'antd';
import RocketOutlined from '@ant-design/icons';

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
                <h1>Under Construction</h1>
                <img style={{maxWidth:'160px', opacity:'80%'}} src="https://image.flaticon.com/icons/svg/2421/2421989.svg"></img>
            </div>
        </div>
        
    )
};

export default AboutMe;