import React, {useState, useEffect} from 'react';
import {ThemeEvent} from '../contexts/GlobalContext';
import {Flex, Col, Row, Text} from './common/base';
import styled from 'styled-components';

import {Logo} from './icons/logo';
import { extremehueBlue } from '../styles/styles';

export const Icon = styled(Col)`
    cursor: pointer;
    margin-bottom: ${(props) => props.hover ? "20px" : "10px"};
    transition: all 300ms;
    height: 100px;
    width: 100px;
    align-items: center;
    justify-content: center;
`;

export const Footer = ({}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    const [globalHover, setGlobalHover] = useState(false);
    const [hover, setHover] = useState(null);
    return (
        <>
            <Flex width="100%" height="90px" onMouseOver={() => setGlobalHover(true)} onMouseLeave={() => setGlobalHover(false)} position="fixed" style={{bottom: 0}}></Flex>
            <Row width="80%" padding="padding: 15px 25px" align="center" justfiy="center" onMouseOver={() => setGlobalHover(true)} onMouseLeave={() => setGlobalHover(false)} style={{left: '10%', bottom: globalHover ? 10 : -100, transition: 'all 300ms'}} position="fixed">
                <Icon align="center" hover={hover == 0} onMouseOver={() => setHover(0)} onMouseLeave={() => setHover(null)}>
                    <Logo height={30} width={50} fill={hover == 0 ? extremehueBlue : darkMode ? "white" : 'black'} />
                    <Text color={hover == 0 && extremehueBlue} weight="400" className="mont" size="12.8" margin="margin-top: 10px;" style={{transition: 'all 0s'}}>HOME</Text>
                </Icon>
                <Flex width={globalHover ? "50%": 0} position="absolute" style={{alignSelf: "center", borderBottom: `solid 1px ${darkMode ? "white" : "black"}`, transitionDuration: '500ms', transition: "all 500ms", bottom: 20, left: '50%'}} />
                <Flex width={globalHover ? "50%": 0} position="absolute" style={{alignSelf: "center", borderBottom: `solid 1px ${darkMode ? "white" : "black"}`, transitionDuration: '500ms', transition: "all 500ms", bottom: 20, right: '50%'}} />
            </Row>
        </>
    )
}

export default Footer;