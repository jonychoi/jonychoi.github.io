import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, CirclePic} from '../../components/common/base';
import { bgStyler } from '../../styles/styles';
import me from '../../imgs/me.jfif';

export const Main = ({darkMode}) => {
    return (
        <Col width="100%" margin="margin: 30px 0px;" bg={darkMode ? "rgb(15, 15, 15)" : "white"} br="20px" padding="padding: 20px;" shadow={true}>
            <Row align="center">
                <CirclePic image={me} size={40} />
                <Col margin="margin-left: 15px;">
                    <Text margin="margin-bottom: 7px;" weight="500">Su Hyung Choi</Text>
                    <Text style={{opacity: 0.8}} weight="400" size="12">Manipulation Team</Text>
                </Col>
            </Row>
            <Flex margin="margin-top: 20px;" width="100%" height="300px;">

            </Flex>
        </Col>
    )
}

export default Main;