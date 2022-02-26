import styled from 'styled-components'
import { Flex, Image } from '../../components/common/base'
import {AnimateCircle} from './landing1';

import cat1 from '../../imgs/cat1.jpg'
import cat2 from '../../imgs/cat2.jpg'
import cat3 from '../../imgs/cat3.jpg'
import cat4 from '../../imgs/cat4.jpg'
import cat5 from '../../imgs/cat5.jpg'
import cat6 from '../../imgs/cat6.jpg'
import cat7 from '../../imgs/cat7.jpg'

import dog1 from '../../imgs/dog1.jpg'
import dog2 from '../../imgs/dog2.jpg'
import dog3 from '../../imgs/dog3.jpg'
import dog4 from '../../imgs/dog4.jpg'
import dog5 from '../../imgs/dog5.jpg'
import dog6 from '../../imgs/dog6.jpg'
import dog7 from '../../imgs/dog7.jpg'

export const dogs = [
    {
        src: dog1,
        x: "25%",
        y: "50%",
    }, 
    {
        src: dog2,
        x: "32%",
        y: "45%",
    }, 
    {
        src: dog3,
        x: "23%",
        y: "59%",
    }, 
    {
        src: dog4,
        x: "25%",
        y: "55%",
    }, 
    {
        src: dog5,
        x: "12%",
        y: "71%",
    }, 
    {
        src: dog6,
        x: "-5%",
        y: "30%",
    }, 
    {
        src: dog7,
        x: "10%",
        y: "70%",
    }
]
;

export const cats = [
    {
        src: cat1,
        x: "20%",
        y: "55%",
    },
    {
        src: cat2,
        x: "25%",
        y: "58%",
    },
    {
        src: cat3,
        x: "-5%",
        y: "30%",
    },
    {
        src: cat4,
        x: "0%",
        y: "22%",
    },
    {
        src: cat5,
        x: "-5%",
        y: "41%",
    },
    {
        src: cat6,
        x: "0%",
        y: "50%",
    },
    {
        src: cat7,
        x: "-5%",
        y: "38%",
    },
];

export const ImgWrap = styled(Flex)`
    opacity: 0.75;
    :hover {
        cursor: pointer;
        opacity: 1;
    };
    transition: all 300ms;
    align-items: center;
    justify-content: center;
`;

export const Img = ({src, x, y, activate, darkMode}) => {
    return (
        <>
            <ImgWrap position="relative" style={{left: `calc(${x} - 50px)`, top: `calc(${y} - 50px)`}} width="100px" height="100px">
                <Image src={src} of="cover" width="100%" height="100%" style={{opacity: activate == 3 ? 1 : 0, transition: 'all 1000ms', position: 'absolute'}} />
                <AnimateCircle activate={activate == 2} darkMode={darkMode} size={15} delay={0} speed={1000} />
            </ImgWrap>
        </>
    )
}

export const Imgs = ({activate, darkMode}) => {
    return (
        <Flex width="100%" height="100%" position="absolute">
            {dogs.map((item, index) => <Img darkMode={darkMode} activate={activate} src={item.src} key={index} x={item.x} y={item.y} />)}
            {cats.map((item, index) => <Img darkMode={darkMode} activate={activate} src={item.src} key={index} x={item.x} y={item.y} />)}
        </Flex>
    )
}

export default Imgs;