import React, { useEffect, useState } from 'react';
import { PageHeader } from 'antd';
import {Redirect} from 'react-router-dom';
import PovertySimulator from './PovertySimulator';
import gsap from 'gsap';

const Projects = (props) => {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        gsap.fromTo(".project-main", {autoAlpha: 0}, {autoAlpha: 1, duration: 2})
    });
    
    return(
        
        <div class="project-body">
            <PageHeader
                className="page-header"
                onBack={() => setRedirect(true)}
                title="Home"
            />
            
            <div className="project-main">
                {redirect && <Redirect to="/Mark-Kjorlien/Home"></Redirect>}
                <PovertySimulator />
            </div>
            
            
        </div>
        
    );
}

export default Projects;