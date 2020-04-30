import React, { Fragment } from 'react';
import { PageHeader, Tabs } from 'antd';

import PovertySimulator from './PovertySimulator';

const Projects = (props) => {

    let changeView = props.changeView;
    const { TabPane } = Tabs;
    
    return(
        <div class="project-body">
            <PageHeader
                className="page-header"
                onBack={() => changeView('home')}
                title="Home"
            />
            <div className="project-main">
                <PovertySimulator />
            </div>
        </div>
        
    );
}

export default Projects;