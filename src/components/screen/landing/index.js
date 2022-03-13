import React from 'react';
import { Flex } from '../../common/base';
import Intro from './intro';

export const Landing = ({route, setRoute}) => {
    return (
        <Flex>
            <Intro />
        </Flex>
    );
};

export default Landing;