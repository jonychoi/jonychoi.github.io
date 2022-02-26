import React, {useState, useEffect} from 'react';
import {ThemeEvent} from '../contexts/GlobalContext';
import {Flex, Col, Row, Text} from './common/base';
import ThemeToggle from './buttons/themeToggle';
import {Logo, Wings} from '../icons/logo';
import Menu from './buttons/menu';


export const Header = ({darkMode, setDarkMode}) => {
    return (
        <Row align="center" height="90px" position="fixed" width="100%" padding="padding: 25px" bg={darkMode ? "rgba(15, 15, 15, 0.85)" : "rgb(255, 255, 255, 0.85)"} justify="flex-start" zIndex={1000}>
            <Row align="center">
                <Logo height={25} width={100} fill={darkMode ? "white" : "black"} />
                <Text size="20" className="mont" weight="700">JONATHAN CHOI</Text>
            </Row>
            <Flex position="absolute" height="90px" style={{right: 30,}}>
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                {/* <Menu darkMode={darkMode} /> */}
            </Flex>
        </Row>
    )
}

export default Header;