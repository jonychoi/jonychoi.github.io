import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../../components/common/base';
import { bgStyler, unlimitColor } from '../../styles';
import styled from 'styled-components';

export const Bar = styled(Flex)`
    background-color: ${unlimitColor};
    height: 2px;
    width: 100%;
`;

export const TimeWrap = styled(Flex)`
    opacity: 0.85;
    cursor: pointer;
    :hover {
        opacity: 1;
    };
    height: 10px;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width}px;
`;

export const Time = ({darkMode, width}) => {
    return (
        <TimeWrap width={width}>
            <Bar darkMode={darkMode} />
        </TimeWrap>
    )
}

export const Timeline = ({page, setPage, darkMode}) => {
    return (
        <Col shadow={true} br="20px" width="100%" height="200px" padding="padding: 20px;" bg={darkMode ? "rgb(20, 20, 20)" : "white"} margin="margin-top: 20px;" position="relative">
            <Text size="18" weight="600" margin="margin-bottom: 20px;">Timeline</Text>
            <Time width={100} darkMode={darkMode} />
        </Col>
    )
};

export default Timeline;