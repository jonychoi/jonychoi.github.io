import React, { useState, useEffect } from 'react';
import {FirstCircle, SecondCircle, Line, HeadText, LineX, LineY} from './components';
import { Flex } from '../../../common/base';
import Main from './legacy';

export const Intro = ({}) => {
    const [activate, setActivate] = useState(-1);
    useEffect(() => {
        const introAnimator = () => {
            setTimeout(() => setActivate(0), 1000);
            setTimeout(() => setActivate(1), 4000);
            setTimeout(() => setActivate(2), 8000);
            setTimeout(() => setActivate(3), 12000);
            setTimeout(() => setActivate(4), 16000);
            setTimeout(() => setActivate(5), 20000);
            setTimeout(() => setActivate(6), 24000);
            setTimeout(() => setActivate(7), 28000);
            setTimeout(() => setActivate(8), 32000);
            setTimeout(() => setActivate(9), 36000);
            setTimeout(() => setActivate(10), 40000);
        };
        introAnimator();
    }, []);
    return (
        <Flex align="center" justify="center" overflow="hidden" position="fixed" width="100vw" height="100vh"style={{top: 0, left: 0}}>
            <FirstCircle activate={activate} />
            <SecondCircle activate={activate} />
            <Line activate={activate} />
            <LineX activate={activate} />
            <LineY activate={activate} />
            <HeadText activate={activate} />
            {/* <Main darkMode={true} /> */}
        </Flex>
    )
};

export default Intro;