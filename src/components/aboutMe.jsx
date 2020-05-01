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
                        
                        <img className="about-me-pic" src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/fam.jpg?alt=media&token=8fe88a9a-26f9-4bd6-9580-fe165b395785"></img>
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
                            I've been an athlete for my entire life, spending most of my time playing competitive hockey in Calgary. These days you could
                            find me playing softball, golf or men's rec league hockey. 
                        </p>
                    </Col>
                    <Col xs={24} md={12}>
                        <img className="about-me-pic" src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/west-coast-express.jpg?alt=media&token=d793d293-1c93-4c74-bc48-4e482f98221a"></img>
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
                            <img className="about-me-pic" src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/Cookie.jpg?alt=media&token=d0c8a733-eaca-4085-b5cb-616e8c47faa1"></img>
                            <figcaption style={{textTransform:"uppercase", fontSize:'.8em'}}>Brown butter chocolate chunk cookies</figcaption>                      
                        </figure>
                    </Col>
                    <Col span={12}>
                        <figure>
                            <img className="about-me-pic" src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/smoke.jpg?alt=media&token=b3805b61-a0b1-485a-9e29-c9dc85070332"></img>
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
                        <img className="about-me-pic" src='https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/hydro-day.jpg?alt=media&token=3f151cec-2cfb-4dc0-a27b-0b1c4803f6c5'></img>
                    </Col>
                    <Col span={12} style={{paddingBottom:0}}>
                        <img className="about-me-pic" src='https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/hydro-night.jpg?alt=media&token=7b7f2e11-54e7-4060-a76e-cdf7cd9257c7'></img>
                    </Col>
                    <Col span={24} style={{textTransform:"uppercase", fontSize:'.8em', padding:0, margin:0}}>
                        <p>Basil, Lettuce, Broccoli, Chives &amp; Parsley</p>
                    </Col>
                    <Col style={{margin: '0 auto', padding:'60px 10px'}}>
                        <h2>Tucker says thank-you for visiting!</h2>
                        <img className="about-me-pic"  src="https://firebasestorage.googleapis.com/v0/b/personal-site-5d5d3.appspot.com/o/IMG_0176.GIF?alt=media&token=f9ce85bb-03ec-4d4a-9a40-6cb9ab42fc69"></img>
                    </Col>
              </Row>
            </div>
            </Scrollbars>
        </Fragment>
        
    )
};

export default AboutMe;