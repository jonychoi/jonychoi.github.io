import React from 'react';
import {Col, Row, Flex, Text} from '../../components/common/base';
import Landing1 from './landing1';

export const Landing = ({darkMode}) => {
    return (
        <div style={{width: "100vw", height: "100vh", overflow: 'hidden', overflowY:'scroll', position: 'fixed', top: 0, left: 0}}>
            <Landing1 darkMode={darkMode} />
        </div>
    )
};

export default Landing;