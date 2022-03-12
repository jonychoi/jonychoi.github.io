import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text} from '../../../../components/common/base';
import {Height, Width} from '../../../../hooks/getWindow';

export const AnimateCircle = styled(Flex)`
    border-radius: 50%;
    border: ${(props) => props.darkMode ? "white" : "black"} 2px solid;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    transform: scale(${(props) => props.activate ? 1 : 0});
    transition: all ease ${(props => props.speed ? props.speed : 1000)}ms;
    opacity: ${(props) => props.activate ? 1 : 0};
    transition-delay: ${(props) => props.delay}ms;
    background-color: ${(props) => props.bgActivate ? props.darkMode ? "white" : "black" : "rgba(0,0,0,0)"};
`;

export const AnimateLine = styled(Flex)`
    background-color:${(props) => props.darkMode ? "white" : "black"};
    width: ${(props) => props.activate ? props.width : 0}px;
    height: 1.5px;
    transition: all ease ${(props) => props.speed ? props.speed : 1500}ms;
    opacity: ${(props) => props.activate ? 1 : 0};
    transition-delay: ${(props) => props.delay}ms;
    transform: rotate(${(props) => props.rotate}deg);
`;

export const Circle = ({activate, darkMode, x, y, size, delay, text, speed}) => {
    return (
        <Flex position="absolute" style={{left: `calc(${x} - ${size / 2}px`, top: `calc(${y} - ${size / 2}px`, transition: `all ease ${speed ? speed : 1000}ms`}} align="center" justify="center">
            <AnimateCircle activate={activate} darkMode={darkMode} size={size} delay={delay} speed={speed} />
            <Text color={darkMode ? "black" : "white"}>{text}</Text>
        </Flex>
    )
}

export const Line = ({activate, darkMode, x, y, width, delay, rotate, speed}) => {
    return (
        <Flex position="absolute" style={{left: x, top: y}} align="center" justify="center">
            <AnimateLine activate={activate} darkMode={darkMode} width={width} delay={delay} rotate={rotate} speed={speed} />
        </Flex>
    )
}

export const Head = ({activate}) => {
    return (
        <Flex position="absolute" width="100%" height="100%" margin="margin-bottom: 100px" justify="center" align="center">
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 0 ? 1 : 0, top: activate == 0 ? '47%' : '55%', transition: 'all 1000ms'}}>We are living in a dot.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 1 ? 1 : 0, top: activate == 1 ? '47%' : '55%', transition: 'all 1000ms', transitionDelay: "1.25s"}}>Sometimes, we connect the dots.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 2 ? 1 : 0, top: activate == 2 ? '20%' : '55%', transition: 'all 1500ms', transitionDelay: "1.5s"}}>And sometimes, we also try to classify things.</Text>
        </Flex>
    )
}

export const Main = ({darkMode}) => {
    const [activate, setActivate] = useState(-1);
    const [firstDot, setFirstDot] = useState({x: '50%', y: '50%'});
    const [rotate, setRotate]= useState(0);
    useEffect(() => {
        setTimeout(() => setActivate(0), 500);
        setTimeout(() => setFirstDot({x: '30%', y: '50%'}), 3300);
        setTimeout(() => setActivate(1), 3300);
        setTimeout(() => setRotate(45), 6500)
        setTimeout(() => setActivate(2), 6500);
        setTimeout(() => setActivate(3), 9500);
    }, [])
    return (
        <Flex width="100vw" height="100vh" position="relative" align="center" justify="center">
            <Head activate={activate} />
            <Circle activate={2 > activate && activate >= 0} darkMode={darkMode} x={firstDot.x} y={firstDot.y} size={30} delay={700} speed={1500} />
            <Line activate={activate >= 1} darkMode={darkMode} x={'calc(30% + 15px)'} y={"50%"} width={Width * 4 / 10 - 30} delay={1000} speed={2000} rotate={rotate} />
            <Circle activate={2 > activate && activate >= 1} darkMode={darkMode} x={"70%"} y={"50%"} delay={activate == 2 ? 700 : 2000} size={30} />
        </Flex>
    )
};

export default Main;