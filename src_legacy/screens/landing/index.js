import React from 'react';
import {Col, Row, Flex, Text} from '../../components/common/base';
import { ThemeEvent } from '../../contexts/globalContext';
import Main from './components';

export const Landing = ({darkMode}) => {
    const {darkMode, setDar}
    return (
        <div style={{width: "100vw", height: "100vh", overflow: 'hidden', overflowY:'scroll', position: 'fixed', top: 0, left: 0}}>
            <Main darkMode={darkMode} />
        </div>
    )
};

export default Landing;