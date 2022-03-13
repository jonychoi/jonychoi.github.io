import React, {useState, useEffect} from 'react';
import {Col, Row, Text, Image, Flex} from '../../../../components/common/base';
import { darkMode } from '../../../../styles';
import styled from 'styled-components';
import {Height, Width} from '../../../../hooks/getWindow';

const circleinitalpoint = {
    x: Width / 2 - 15,
    y: Height / 2 - 50,
}

const circleafterpoint = {
    // half window - half line - 지름
    x: Width / 2 - 650 / 2 - 30,
    y: Height / 2 - 50
}


export const AnimateLine = styled(Flex)`
    background-color:${darkMode ? "white" : "black"};
    width: ${(props) => props.activate ? 650 : 0}px;
    height: 1.5px;
    transition: all ease 1500ms;
    opacity: ${(props) => props.activate ? 1 : 0};
    left: ${(props) => props.left ? props.left : Width / 2 - 325}px;
    top: ${(props) => props.top ? props.top : circleinitalpoint.y + 15}px;
    transform: rotate(${(props) => props.rotate}deg);
    position: absolute;
    transition-delay: ${(props) => props.delay}ms;
`;

export const CircleWrap = styled(Flex)`
    border-radius: 50%;
    border: solid 2px ${darkMode ? "white" : "black"};
    width: 30px;
    height: 30px;
    transform: scale(${(props) => props.activate ? 1 : 0});
    transition: all ease 1500ms;
    opacity: ${(props) => props.activate ? 1 : 0};
    position: absolute;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
    transition-delay: ${(props) => props.delay}ms;
`;

export const HeadText = ({activate}) => {
    return (
        <>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 0 ? 1 : 0, top: activate == 0 ? '40%' : '55%', transition: 'all 1500ms'}}>We are living in a dot.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 1 ? 1 : 0, top: activate == 1 ? '40%' : '55%', transition: 'all 1500ms', transitionDelay: activate  == 1 ? "1.25s" : 0}}>Sometimes, we connect the dots.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 2 ? 1 : 0, top: activate == 2 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 2 ? "1.5s" : 0}}>And sometimes, we try to classify things.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 3 ? 1 : 0, top: activate == 3 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 3 ? "1.5s" : 0}}>we can also try to predict what we desire.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 4 ? 1 : 0, top: activate == 4 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 4 ? "1.5s" : 0}}>Actually, all of those are kind of 'Dimensions'.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 5 ? 1 : 0, top: activate == 5 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 5 ? "1.5s" : 0}}>These are telling us that we are living in a Multi Dimension.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 6 ? 1 : 0, top: activate == 6 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 6 ? "1.5s" : 0}}>But, on the Universe, <br></br>how many Dimensions exist?</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 7 ? 1 : 0, top: activate == 7 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 7 ? "1.5s" : 0}}>And in this 'Dimension', <br></br>Is it true that we expereince and feel?</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 8 ? 1 : 0, top: activate == 8 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 8 ? "1.5s" : 0}}>Well, we don't know. <br></br>Maybe someday, somewhere, someone could solve this.</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 9 ? 1 : 0, top: activate == 9 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 9 ? "1.5s" : 0}}>Anyway, Wouldn't it be meaningful to explore where we came from and where we go?</Text>
            <Text className="mont" size="22" style={{position: "absolute", opacity: activate == 10 ? 1 : 0, top: activate == 10 ? '10%' : '55%', transition: 'all 1500ms', transitionDelay: activate == 10 ? "1.5s" : 0}}>Let's find that answer here.</Text>
        </>
    )
};

export const Line = ({activate}) => {
    const [_activate, set_Activate] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [delay, setDelay] = useState(0);
    useEffect(() => {
        const animator = () => {
            if (activate == 0) {

            } else if (activate == 1){
                set_Activate(true);   
                setDelay(1000);
            } else if (activate == 2){
                setRotate(45)
            } else if (activate == 3){
                setDelay(1500)
                setRotate(-45)
            } else if (activate == 4){

            }
        }
        animator()
    }, [activate]);
    return (
        <AnimateLine activate={_activate} rotate={rotate} delay={delay} />
    )
};

export const LineX = ({activate}) => {
    const [_activate, set_Activate] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [delay, setDelay] = useState(0);
    const [top, setTop] = useState(0);
    useEffect(() => {
        const animator = () => {
            if (activate == 3){
                set_Activate(true);
                setTop(Height / 2 + 200)
            } else if (activate == 4){
                setTop(circleinitalpoint.y + 15);
            }
        }
        animator()
    }, [activate]);
    return (
        <AnimateLine activate={_activate} rotate={rotate} delay={delay} style={{top: top}} />
    )
};

export const LineY = ({activate}) => {
    const [_activate, set_Activate] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [delay, setDelay] = useState(0);
    const [left, setLeft] = useState(0);
    useEffect(() => {
        setRotate(90);
        const animator = () => {
            if (activate == 3){
                set_Activate(true);
                setLeft(Width / 2 - 325 - 200);
            } else if (activate == 4){
                setLeft(Width / 2 - 325);
            }
        }
        animator()
    }, [activate]);
    return (
        <AnimateLine activate={_activate} rotate={rotate} delay={delay} style={{left: left}} />
    )
};

export const FirstCircle = ({activate}) => {
    const [_activate, set_Activate] = useState(false);
    const [delay, setDelay] = useState(0);
    const [coor, setCoor] = useState({x: circleinitalpoint.x, y: circleinitalpoint.y});
    useEffect(() => {
        const animator = () => {
            if (activate == 0){
                set_Activate(true);
                setDelay(300);
            } else if (activate == 1) {
                setCoor({x: circleafterpoint.x, y:  circleinitalpoint.y});
                setDelay(0);
            } else if (activate == 2) {
                set_Activate(false);
                setDelay(0);
            }
        };
        animator();
    }, [activate]);
    return (
        <CircleWrap activate={_activate} x={coor.x} y={coor.y} delay={delay} />
    )
};

export const SecondCircle = ({activate}) => {
    const [_activate, set_Activate] = useState(false);
    const [delay, setDelay] = useState(0);
    const [coor, setCoor] = useState({x: Width - circleafterpoint.x - 30, y: circleinitalpoint.y});
    useEffect(() => {
        const animator = () => {
            if (activate == 0){
                
            } else if (activate == 1) {
                set_Activate(true);
                setDelay(2000);
            } else if (activate == 2){
                set_Activate(false);
                setDelay(0);
            }
        };
        animator();
    }, [activate]);
    return (
        <CircleWrap activate={_activate} x={coor.x} y={coor.y} delay={delay} />
    )
};