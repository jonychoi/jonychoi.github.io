import React, {useState} from 'react';
import {Col, Row, Flex, Text} from './base';
import mainstructure from '../screen/landing/structure';
import aistructure from '../screen/ai/structure';
import lifestructure from '../screen/life/structure';
import universalstructure from '../screen/universalphysics/structure';
import jonystructure from '../screen/jony/structure'
import { componentBger, darkMode, unlimitColor } from '../../styles';
import {LeftIcon} from '../icons/utilities';
import styled from 'styled-components';

const CloseOpenBtn = styled(Flex)`
    height: 100%;
    width: 50px;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    opacity: 0.24;
    cursor: pointer;
    svg {
        transform: rotate(${(props) => props.open ? '180deg' : '0deg'});
    }
    :hover {
        opacity: 1;
        svg {
            path {
                stroke: #00dcff;
            }
        }
    };
`;

export const RightBar = ({route}) => {
    // 임시
    const [link, setLink] = useState(null);

    const [open, setOpen] = useState(true);
        return (
        <Row width="350px" position="fixed" height="100vh" shadow={true} style={{right: open ? 0 : -310, top: 0, zIndex: 1000, transition: 'all 300ms'}}>
            <CloseOpenBtn onClick={() => setOpen(!open)} open={open}>
                <LeftIcon height={25} width={10} strokeWidth="3" />
            </CloseOpenBtn>
            <Flex width="100%" height="100%" style={{display: 'block', overflowY: 'scroll'}} bg={componentBger()}>
                <Category link={link} setLink={setLink} items={route == 1 && mainstructure || route == 2 && aistructure || route == 3 && universalstructure || route == 4 && lifestructure || route == 5 && jonystructure} type={0} />
            </Flex>
        </Row>
    )   
};

export const Category = ({link, setLink, items, type}) => {
    const [open, setOpen] = useState(type == 0 || type == 1 ? true : false);
    return (
        <Col overflow="hidden" style={{height: open ? 'auto' : type == 0 ? 50 : 34}}>
            {!(type === 1 && !items.subcontents || (type === 2 && !items.subcontents) || (type === 3 && !items.subcontents)) && <Btn open={open} setOpen={setOpen} link={link} items={items} setLink={setLink} text={items.title} type={type} />}
            {items.contents != undefined ? items.contents.map(item => <Category link={link} setLink={setLink} type={type + 1} key={item.title} items={item} />)
            : 
            items.subcontents != undefined ? items.subcontents.map(item => <Category link={link} setLink={setLink} type={type + 1} key={item.title} items={item} />)
            : 
            <Btn open={open} setOpen={setOpen} link={link} items={items} setLink={setLink} text={items.title} type={type} key={items.title} />}
        </Col>
    )
}

export const BtnText = styled(Text)`
    font-size: ${(props) => props.type === 0 ? "17px" : props.type === 1 ? "15px" : "12.8px"};
    font-weight: ${(props) => props.type === 0 ? "700" : props.type === 1 ? "600" : props.type === 2 ? "400" : "300"};
    margin-left: ${(props) => props.type === 0 && 10 || props.type === 3 && 20 || props.type === 2 && 10}px;
    line-height: ${(props) => props.type === 0 ? 18 : props.type === 1 ? 16 : 16}px;
    color: ${(props) => props.type >= 2 && props.text === props.link && "#00dcff"};
    font-family: Montserrat;
`;

export const BtnWrap = styled(Row)`
    padding: ${(props) => props.type === 0 ? "15px 10px 10px 10px" : props.type === 1 ? "10px 10px 10px 20px;" : "8px 10px 10px 20px;"};
    cursor: pointer;
    opacity: ${(props) => props.type === 0 ? 1 : props.type === 1 || 2 ? props.text === props.link ? 1 : 0.9 : 0.8};
    :hover {
        opacity: 1;
    };
    transition: all 300ms;
    user-select: none;
    border-left: ${(props) => props.type <= 1 && 'solid 1px #00dcff'};
    justify-content: space-between;
    align-items: center;
`;

export const Btn = ({open, setOpen, link, setLink, text, type, items}) => {
    return (
        <BtnWrap link={link} type={type} text={text} onClick={() => {setLink(text); setOpen(!open)}}>
            <Row align="center" >
                {items.icon && items.icon}
            <BtnText type={type} link={link} text={text}>{text}</BtnText>
            </Row>
            <Text weight="400" size={11} color={unlimitColor}>{items.contents ? items.contents.length : items.subcontents ? items.subcontents.length : null}</Text>
        </BtnWrap>
    )
}

export default RightBar;