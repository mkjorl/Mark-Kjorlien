import React from 'react';
import { PageHeader } from 'antd';

const Projects = (props) => {

    let changeView = props.changeView;
    
    return(
        <div className="project-main">
            <PageHeader
                className="page-header"
                onBack={() => changeView('home')}
                title="Home"
            />
        </div>
    );
}

export default Projects;