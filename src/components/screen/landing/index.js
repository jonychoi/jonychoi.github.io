import React from 'react';
import { Flex } from '../../common/base';
import Intro from './intro';

export const Landing = ({route, setRoute}) => {
    return (
        <Flex>
            <Intro route={route} setRoute={setRoute} />
        </Flex>
    );
};

export default Landing;