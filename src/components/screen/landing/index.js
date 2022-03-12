import React from 'react';
import { Flex } from '../../common/base';
import Intro from './intro';
import { ThemeEvent } from '../../../contexts/globalContext';

export const Landing = ({route, setRoute}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    return (
        <Flex>
            <Intro darkMode={darkMode} />
        </Flex>
    );
};

export default Landing;