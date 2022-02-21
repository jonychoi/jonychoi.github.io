import React, {useState, useEffect} from 'react';
import {ThemeEvent} from '../contexts/GlobalContext';
import {Flex, Col, Row, Text} from './common/base';
import ThemeToggle from './buttons/themeToggle';
import {Logo, Wings} from './icons/logo';
import Menu from './buttons/menu';


export const Header = ({}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    return (
        <Row align="center" height="90px" position="fixed" width="100%" align="center" zIndex={1000}>
            <Col align="center" position="relative" flex={1}>
                <Flex position="relative" height="70px" width="250px" align="center">
                    <Flex position="absolute" style={{left: 75, bottom: 32}}>
                        <Logo height={21} width={100} fill={darkMode ? "white" : "black"} />
                    </Flex>
                    <Flex position="absolute" style={{left: 25, bottom: 33}}>
                        <Wings height={20} width={200} fill={darkMode ? "white" : "black"} />
                    </Flex>
                </Flex>
                <Flex position="absolute" style={{bottom: 8}}>
                    <Text size="14" className="mont" weight="700">JONATHAN CHOI</Text>
                </Flex>
            </Col>
            <Flex position="absolute" style={{right: 20}}>
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                <Menu darkMode={darkMode} />
            </Flex>
        </Row>
    )
}

export default Header;