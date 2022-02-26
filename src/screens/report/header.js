import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../components/common/base';
import cvlab from '../../imgs/cvlab.png';
import Timeline from './timeline';

export const Header = ({darkMode}) => {
    return (
        <Col width="100%">
            <Row align="center" justify="space-between" padding="padding: 0px 10px;">
                <Col>
                    <Text size="26" weight="700">Computer Vision Lab Intern Report</Text>
                    <Text style={{opacity: 0.8}} margin="margin: 5px 0px; margin-top: 15px;">CVLAB @ Dept. of Computer Science & Engineering, Korea Univ.</Text>
                </Col>
                <Col>
                    <Image src={cvlab} height="30px" of="contain" />
                </Col>
            </Row>
            <Timeline darkMode={darkMode} />
        </Col>
    )
}

export default Header;