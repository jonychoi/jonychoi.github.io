import React, { useState, useEffect } from 'react';
import {FirstCircle, SecondCircle, Line, HeadText, LineX, LineY} from './components';
import { Flex } from '../../../common/base';

export const Intro = ({route, setRoute}) => {
    const [activate, setActivate] = useState(-1);
    useEffect(() => {
        const _1 = route === 0 && setTimeout(() => setActivate(0), 1000);
        const _2 = route === 0 && setTimeout(() => setActivate(1), 4000);
        const _3 = route === 0 && setTimeout(() => setActivate(2), 8000);
        const _4 = route === 0 && setTimeout(() => setActivate(3), 12000);
        const _5 = route === 0 && setTimeout(() => setActivate(4), 16000);
        const _6 = route === 0 && setTimeout(() => setActivate(5), 20000);
        const _7 = route === 0 && setTimeout(() => setActivate(6), 24000);
        const _8 = route === 0 && setTimeout(() => setActivate(7), 28000);
        const _9 = route === 0 && setTimeout(() => setActivate(8), 32000);
        const _10 = route === 0 && setTimeout(() => setActivate(9), 36000);
        const _11 = route === 0 && setTimeout(() => setActivate(10), 40000);
        return () => {
            clearTimeout(_1);
            clearTimeout(_2);
            clearTimeout(_3);
            clearTimeout(_4);
            clearTimeout(_5);
            clearTimeout(_6);
            clearTimeout(_7);
            clearTimeout(_8);
            clearTimeout(_9);
            clearTimeout(_10);
            clearTimeout(_11);
        }
    }, [route === 0]);
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