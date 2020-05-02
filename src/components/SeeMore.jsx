import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ArrowDownOutlined} from '@ant-design/icons';
import {Row, Col} from 'antd';

const SeeMore = () => {

    useEffect(() => {
        var tl = new gsap.timeline({repeat:-1, yoyo:'true'});
        tl.to("#seeMoreArrow", {duration: 2, y: 40})
    }, []);
    


    return(
        <Row style={{fontSize:"2em", height:300, display:'block'}}>
            <Col style={{position:'relative', margin:'0 auto', transform: 'translate(0, 100%)', width:'10%', height:'10%'}}>
                <ArrowDownOutlined id="seeMoreArrow"/>
            </Col>
        </Row>
    );
};

export default SeeMore;