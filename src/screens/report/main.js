import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, CirclePic} from '../../components/common/base';
import { bgStyler, blueLowColor, extremehueBlue } from '../../styles/styles';
import me from '../../imgs/me.jfif';

export const Main = ({content, page, setPage, darkMode}) => {
    return (
        <Col position="relative">
            <Text weight="700" size="28" margin="margin-left: 10px;" className='mont'>{content.title}</Text>
            <Col width="100%" margin="margin-top: 30px;" bg={darkMode ? "rgb(30, 30, 30)" : "white"} br="20px" padding="padding: 20px;" shadow={true}>
                <Row align="center">
                    <CirclePic image={me} size={40} />
                    <Col margin="margin-left: 15px;">
                        <Text margin="margin-bottom: 7px;" weight="500" className='mont'>Su Hyung Choi</Text>
                        <Text style={{opacity: 0.8}} weight="400" size="12" className='mont'>Manipulation Team</Text>
                    </Col>
                </Row>
                <Flex margin="margin-top: 25px;" width="100%" height="300px;">
                    <Text>
                        {content.description}
                    </Text>
                </Flex>
                <Flex to="cursor" onClick={() => setPage(page - 1)} style={{position: 'absolute', top: "50%", left: -50}}>
                    <Text weight="700" color={darkMode ? extremehueBlue : "black"}>{`< Prev`}</Text>
                </Flex>
                <Flex to="cursor" onClick={() => setPage(page + 1)} style={{position: 'absolute', top: "50%", right: -50}}>
                    <Text weight="700" color={darkMode ? extremehueBlue : "black"}>{`Next >`}</Text>
                </Flex>
            </Col>
        </Col>
    )
}

export default Main;