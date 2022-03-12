import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../components/common/base';
import cvlab from '../../imgs/cvlab.png';
import Timeline from './timeline';

export const Header = ({page, setPage, darkMode}) => {
    return (
        <Col width="100%">
            <Row align="center" justify="space-between">
                <Col>
                    <Text size="30" weight="700" className='mont'>COMPUTER VISION LAB INTERN LOG</Text>
                    <Text style={{opacity: 0.8}} margin="margin: 5px 0px; margin-top: 15px;" className='mont'>Report for Jan 3 - Feb 28 Winter 2022 @ Computer Vision Lab.</Text>
                </Col>
                <Col>
                    <Image src={cvlab} height="30px" of="contain" />
                </Col>
            </Row>
            <Timeline page={page} setPage={setPage} darkMode={darkMode} />
        </Col>
    )
}

export default Header;