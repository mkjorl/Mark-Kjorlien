import React, {Fragment, useState, useEffect} from 'react';
import { PageHeader, Col, Row } from 'antd';
import Scrollbars from 'react-custom-scrollbars';
import { Redirect } from 'react-router';
import gsap from'gsap';

const AboutMe = (props) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        gsap.fromTo(".about-main", {autoAlpha: 0}, {autoAlpha: 1, duration: 2})
    }, []);
       
    return(
        <Fragment>
            <PageHeader
                className="site-page-header"
                onBack={() => setRedirect(true)}
                title="Home"
            />
            <Scrollbars>
           
            {redirect && <Redirect to="/Mark-Kjorlien/Home"></Redirect>}
            <div className="about-main">
                <h1>All About Me</h1>
              <Row gutter={[16, 32]} className="about-main-row" >
                    <Col xs={24} md={12}>
                        
                        <img className="about-me-pic" src={require(`./assets/fam.jpg`)}></img>
                    </Col>
                    <Col xs={24} md={12} className="justify" style={{margin:'auto auto'}}>
                        <h2>Who Am I?</h2>
                        <p>
                            My name is Mark Kjorlien (jor-leen) and I am a recent Computer Software Developer graduate from NAIT.
                            I was recently married and have a 4 year old Papillion / Australian Shepherd. I'm constantly exploring new hobbies 
                            and starting new projects; I'm infinitely curious.
                        </p>
                    </Col>   
                    <Col xs={24} md={12} className="justify" style={{margin:'auto auto'}}>
                        <h2>Athlete</h2>
                        <p>
                            I've been an athlete for my entire life, spending my time playing competitive hockey and any other sport I could get involved in. These days you could
                            find me playing softball, golf or men's rec league hockey. 
                        </p>
                    </Col>
                    <Col xs={24} md={12} style={{margin:'auto auto'}}>
                        <img style={{width:'80%', margin:'0 auto'}} src={require(`./assets/hockey.jpg`)}></img>
                    </Col>
                    <Col xs={24} className="justify">
                        <h2>Food</h2>
                        <p>
                            Something I enjoy doing is exploring with cooking and baking, though my favourite part is always the tasting.
                            I'm known for smashing some burgers on my griddle, smoking meat in my smoker and never forgetting about dessert.
                            I'll be working on a food related application soon!
                        </p>
                    </Col>
                    <Col span={12}>
                        <figure>
                            <img className="about-me-pic" src={require(`./assets/Cookie.jpg`)}></img>
                            <figcaption style={{textTransform:"uppercase", fontSize:'.8em'}}>Brown butter chocolate chunk cookies</figcaption>                      
                        </figure>
                    </Col>
                    <Col span={12}>
                        <figure>
                            <img className="about-me-pic" src={require(`./assets/meat.jpg`)}></img>
                            <figcaption style={{textTransform:"uppercase", fontSize:'.8em'}}>Pork shoulder - smoked for 8 hours with oak</figcaption>
                        </figure>
                    </Col>
                    <Col span={24} className="justify">
                        <h2>Hydroponics</h2>
                        <p>
                            Lately I have been exploring hydroponics; the act of growing plants in water and without the use of soil.
                            With the use of hydroponics, lettuce grows from seed to harvest in 40 days.
                        </p>
                    </Col> 
                    <Col span={12} style={{paddingBottom:0}}>
                        <img className="about-me-pic" src={require(`./assets/hydro-day.jpg`)}></img>
                    </Col>
                    <Col span={12} style={{paddingBottom:0}}>
                        <img className="about-me-pic" src={require(`./assets/hydro-night.jpg`)}></img>
                    </Col>
                    <Col span={24} style={{textTransform:"uppercase", fontSize:'.8em', padding:0, margin:0}}>
                        <p>Basil, Lettuce, Broccoli, Chives &amp; Parsley</p>
                    </Col>
                    <Col style={{margin: '0 auto', padding:'60px 10px'}}>
                        <h2>Tucker says thank-you for visiting!</h2>
                        <img className="about-me-pic"  src={require(`./assets/tunk.gif`)}></img>
                    </Col>
              </Row>
            </div>
            </Scrollbars>
        </Fragment>
        
    )
};

export default AboutMe;