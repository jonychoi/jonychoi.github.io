import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, CirclePic} from '../../components/common/base';
import { bgStyler, blueLowColor, unlimitColor } from '../../styles';
import {BackIcon, RightIcon} from '../../icons/utilities';
import me from '../../imgs/me.jfif';

export const Main = ({head, content, page, setPage, darkMode}) => {
    const [opacity, setOpactiy] = useState({opa: 1, animation: "all 300ms"});
    useEffect(() => {
        const setter = () => {
            setOpactiy({opa: 0, animation: "all 0s"});
            setTimeout(()=> setOpactiy({opa: 1, animation: "all 300ms"}), 300);
        };
        setter();
    }, [content]);
    return (
        <Col position="relative">
            <Text weight="700" size="28" margin="margin-left: 10px;" className='mont'>{head}</Text>
           {content.title &&  <Text weight="500" size="20" style={{opacity: 0.8}} margin="margin-left: 10px; margin-top: 20px;" className='mont'>{content.title}</Text>}
            <Col width="100%" margin="margin-top: 30px;" bg={darkMode ? "rgb(30, 30, 30)" : "white"} br="20px" padding="padding: 20px;" shadow={true}>
                <Row align="center">
                    <CirclePic image={me} size={40} />
                    <Col margin="margin-left: 15px;">
                        <Text margin="margin-bottom: 7px;" weight="500" className='mont'>Su Hyung Choi</Text>
                        <Text style={{opacity: 0.8}} weight="400" size="12" className='mont'>Manipulation Team</Text>
                    </Col>
                </Row>
                <Flex margin="margin-top: 25px;" width="100%" height="300px;" style={{opacity: opacity.opa, transition: opacity.animation}}>
                    <Text>
                        {content.description}
                    </Text>
                </Flex>
                {page != 0 && <Flex to="cursor" onClick={() => setPage(page - 1)} style={{position: 'absolute', top: "50%", left: -50, transform: 'rotate(180deg)'}}>
                    <RightIcon height="30px" width={20} stroke={darkMode ? unlimitColor : "black"} />
                </Flex>}
                <Flex to="cursor" onClick={() => setPage(page + 1)} style={{position: 'absolute', top: "50%", right: -50}}>
                    <RightIcon height="30px" width={20} stroke={darkMode ? unlimitColor : "black"} />
                </Flex>
            </Col>
        </Col>
    )
}

export default Main;