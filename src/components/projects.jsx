import React, { Fragment } from 'react';
import { PageHeader, Tabs } from 'antd';

import PovertySimulator from './PovertySimulator';

const Projects = (props) => {

    let changeView = props.changeView;
    const { TabPane } = Tabs;
    
    return(
        <Fragment>
            <PageHeader
                className="page-header"
                onBack={() => changeView('home')}
                title="Home"
            />
            <div className="project-main">
                <PovertySimulator />
            </div>
        </Fragment>
        
    );
}

export default Projects;