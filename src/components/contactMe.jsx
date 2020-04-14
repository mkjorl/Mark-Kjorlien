import React from 'react';
import { PageHeader } from 'antd';

const ContactMe = (props) => {

    let changeView = props.changeView;

    return(
        <div className="contact-main">
               <PageHeader
                className="site-page-header"
                onBack={() => changeView('home')}
                title="Contact me"
            />
        </div>
     
    );  
};

export default ContactMe;