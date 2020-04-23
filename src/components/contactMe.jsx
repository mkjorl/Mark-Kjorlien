import React, { useState, useEffect} from 'react';
import { PageHeader, Form, Input, Button } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import axios from 'axios';


const ContactMe = (props) => {

    let changeView = props.changeView;

    useEffect(() => {
        gsap.fromTo(".contact-main", {autoAlpha: 0}, {autoAlpha: 1, duration: 2})
    });

    const changeDisplay = (newView) => {
        gsap.fromTo('.contact-main', {autoAlpha:1}, {autoAlpha:0, duration:2});
        setTimeout(function(){changeView(newView)}, 2000);
    }

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const [submitted, setSubmitted ] = useState(false);

    const handleServerResponse = (ok) => {
        setServerState({
            submitting: false,
            status: { ok }
        });
        if(ok) {
            setSubmitted(true);
        }
    }

    const onFinish = values => {
        const data = new FormData();
        data.append('name', values.name);
        data.append('email', values.email);
        data.append('message', values.message);
        setServerState({ submitting: true});
        axios({
            method: 'POST',
            url:"https://formspree.io/moqnrnqj",
            data: data
        })
        .then(response => {
            handleServerResponse(true);
        })
        .catch(response => {
            handleServerResponse(false, response.response.data.error);
            console.error(response.response.data.error);
        })
    };

    return(
        <div className="contact-main">
               <PageHeader
                className="site-page-header"
                onBack={() => changeDisplay('home')}
                title="Home"
            />

            <div className="form-container">
                
                { submitted ?
                    <div className="form-success-container">
                        <h2>Thank-you!</h2>
                        <p>I hope to speak to you soon.</p>
                        <p>While you wait, connect with me on Linked<a href="https://www.linkedin.com/in/mark-kjorlien-0526a9185/" target="_blank"><LinkedinOutlined style={{fontSize: '1.5em'}}/></a></p>
                    </div>
                :
                <Form className="contact-form"
                    layout="vertical"
                    onFinish={onFinish}>
                        <h2>Contact Me</h2>
                    <Form.Item label="Name" name="name"
                        rules={[{
                            required: true, message:'Please enter your name'
                        }]}>
                        <Input placeholder="Please enter your name"/>
                    </Form.Item>
                    <Form.Item label="Email" name="email"
                        rules={[{
                            type: 'email',
                            required: true, message:'Please enter a valid email'
                        }]}>
                        <Input placeholder="Please enter your email"/>
                    </Form.Item>
                    <Form.Item label="Message" name="message"
                        rules={[{
                            required: true, message:'Please enter a message'
                        }]}>
                        <Input.TextArea className="message-box" placeholder="Please enter your message"/>
                    </Form.Item>
                    <Form.Item style={{paddingTop:30}}>
                        <Button type="submit" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
                }
            </div>
        </div>
     
    );  
};

export default ContactMe;