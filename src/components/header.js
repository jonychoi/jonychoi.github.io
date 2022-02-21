import React, {useState, useEffect} from 'react';
import {ThemeEvent} from '../contexts/GlobalContext';
import {Flex, Col, Row, Text} from './common/base';
import ThemeToggle from './buttons/themeToggle';
import {Logo, Wings} from './icons/logo';
import Menu from './buttons/menu';


export const Header = ({}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    return (
        <Row align="center" height="90px" position="fixed" width="100%" padding="padding: 25px" justify="flex-start" zIndex={1000}>
            <Col align="center">
                <Logo height={25} width={100} fill={darkMode ? "white" : "black"} />
                {/* <Text size="14" className="mont" weight="700">JONATHAN CHOI</Text> */}
            </Col>
            <Flex position="absolute" height="90px" style={{right: 30,}}>
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                {/* <Menu darkMode={darkMode} /> */}
            </Flex>
        </Row>
    )
}

export default Header;