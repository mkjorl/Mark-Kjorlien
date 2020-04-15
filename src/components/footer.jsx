import React from 'react';
import { Row } from 'antd';

const Footer = () => {
    return(
        <footer>
            <Row className="footer-content">
                <p>powered by</p>
                <a href="https://reactjs.org/" target="_blank"><img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png"/></a> 
            </Row>
           
        </footer>
    );
};

export default Footer;