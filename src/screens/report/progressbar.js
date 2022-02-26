import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../../components/common/base';

export const ProgressBar = ({darkMode}) => {
    return (
        <Row width="90%" style={{alignSelf: "center"}} margin="margin: 20px 0px;">
            <Flex width="100%" height="2px;" bg={darkMode ? "rgb(80, 80, 80)" : "rgb(180, 180, 180)"}></Flex>
        </Row>
    )
}

export default ProgressBar;