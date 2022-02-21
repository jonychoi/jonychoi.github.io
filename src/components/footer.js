import React, {useState, useEffect} from 'react';
import {ThemeEvent} from '../contexts/GlobalContext';
import {Flex, Col, Row, Text} from './common/base';
import styled from 'styled-components';
import ThemeToggle from './buttons/themeToggle';

import {Logo} from './icons/logo';
import { extremehueBlue } from '../styles/styles';

export const IconWrap = styled(Col)`
    cursor: pointer;
    margin-bottom: ${(props) => props.hover ? "20px" : "10px"};
    transition: all 300ms;
    height: 100px;
    width: 100px;
    align-items: center;
    justify-content: center;
`;

export const Icon = ({hover, setHover, index, icon, text}) => {
    return (
        <IconWrap hover={hover == index} onMouseOver={() => setHover(index)} onMouseLeave={() => setHover(null)}>
            {icon}
            <Text color={hover == index && extremehueBlue} weight="400" className="mont" size="12.8" margin="margin-top: 10px;">{text}</Text>
        </IconWrap>
    )
}

export const Footer = ({}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    const [globalHover, setGlobalHover] = useState(false);
    const [hover, setHover] = useState(null);
    return (
        <>
            <Flex width="100%" height="90px" onMouseOver={() => setGlobalHover(true)} onMouseLeave={() => setGlobalHover(false)} position="fixed" style={{bottom: 0}}></Flex>
            <Row width="80%" padding="padding: 15px 25px" align="center" justfiy="center" onMouseOver={() => setGlobalHover(true)} onMouseLeave={() => setGlobalHover(false)} style={{left: '10%', bottom: globalHover ? 10 : -100, transition: 'all 300ms'}} position="fixed">
                <Icon hover={hover} setHover={setHover} index={0} icon={<Logo height={30} width={50} fill={hover == 0 ? extremehueBlue : darkMode ? "white" : 'black'} />} text="HOME" />
                <Flex width={globalHover ? "50%": 0} position="absolute" style={{alignSelf: "center", borderBottom: `solid 1px ${darkMode ? "white" : "black"}`, transitionDelay: '100ms', transition: "all 300ms", bottom: 20, left: '50%'}} />
                <Flex width={globalHover ? "50%": 0} position="absolute" style={{alignSelf: "center", borderBottom: `solid 1px ${darkMode ? "white" : "black"}`, transitionDelay: '100ms', transition: "all 300ms", bottom: 20, right: '50%'}} />
            </Row>
        </>
    )
}

export default Footer;