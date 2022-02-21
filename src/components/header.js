import React, {useState, useEffect} from 'react';
import {ThemeEvent} from '../contexts/GlobalContext';
import {Flex, Col, Row, Text} from './common/base';

export const Header = ({}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    return (
        <Row>

        </Row>
    )
}

export default Header;