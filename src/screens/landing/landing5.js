import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, CirclePic} from '../../components/common/base';
import me from '../../components/imgs/me.jfif';

export const Landing = ({darkMode}) => {
    return (
        <Row>
            <CirclePic image={me} size={300} />
            <Col>

            </Col>
        </Row>
    )
};

export default Landing;