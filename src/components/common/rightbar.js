import React, {useEffect, useState} from 'react';
import {Col, Row, Flex, Text} from './base';
import mainstructure from '../screen/landing/structure';
import aistructure, {cvReviewStructure} from '../screen/ai';
import lifestructure from '../screen/life';
import universalstructure from '../screen/universalphysics';
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

export const RightBar = ({link, setLink, route}) => {
    const [open, setOpen] = useState(false);
    const [reviewOpen, setReviewOpen] = useState(false);
    // set if user close the rightbar once, then not automatically showing by changing screen
    const [initialopen, setinitialopen] = useState(false);
    useEffect(() => {
        const opener = () => {
            if (route === 0 || route === 1 || route === 5){
                setOpen(false)
            } else {
                setOpen(true);
            };
        };
        !initialopen && opener();
    }, [route])
    return (
        <Row width="350px" position="fixed" height="100vh" shadow={true} style={{right: open ? 0 : -310, top: 0, zIndex: 1001, transition: 'all 300ms'}}>
            <CloseOpenBtn onClick={() => {setOpen(!open); setinitialopen(true)}} open={open}>
                <LeftIcon height={25} width={10} strokeWidth="3" />
            </CloseOpenBtn>
            <Flex width="100%" height="100%" style={{display: 'block', overflowY: 'scroll'}} bg={componentBger()}>
                <Category setReviewOpen={setReviewOpen} reviewOpen={reviewOpen} link={link} setLink={setLink} items={route == 1 && mainstructure || route == 2 && aistructure || route == 3 && universalstructure || route == 4 && lifestructure || route == 5 && jonystructure} type={0} />
            </Flex>
            {route === 2 && <Row width="310px" position="fixed" height="100vh" shadow={true} style={{right: reviewOpen && open ? 0 : -310, top: 0, zIndex: 1002, transition: 'all 300ms'}}>
                <Flex width="100%" height="100%" style={{display: 'block', overflowY: 'scroll'}} bg={componentBger()}>
                    <Category setReviewOpen={setReviewOpen} reviewOpen={reviewOpen} review={true} link={link} setLink={setLink} items={cvReviewStructure} type={0} />
                </Flex>
            </Row>}
        </Row>
        )   
};

export const Category = ({setReviewOpen, reviewOpen, link, setLink, items, type, review}) => {
    // arg review for style
    const [open, setOpen] = useState(type == 0 || type == 1 ? true : false);
    return (
        <Col onClick={() => items.title === "Computer Vision Paper Reviews" && setReviewOpen(!reviewOpen)} 
            overflow="hidden" style={{height: open ? 'auto' : (type == 0 || type === 4) ? 50 : (review && type !== 0 && type !== 1) ? 'auto' : 34}}>
                
            {!(type === 1 && !items.subcontents || (type === 2 && !items.subcontents) || (type === 3 && !items.subcontents) || (type === 4 && !items.subcontents)) 
                && 
            <Btn review={review} setReviewOpen={setReviewOpen} reviewOpen={reviewOpen} open={open} setOpen={setOpen} link={link} items={items} setLink={setLink} text={items.title} type={type} />}

            {items.contents != undefined ? items.contents.map(item => <Category review={review} setReviewOpen={setReviewOpen} reviewOpen={reviewOpen} link={link} setLink={setLink} type={type + 1} key={item.title} items={item} />)
                : 
            items.subcontents != undefined ? items.subcontents.map(item => <Category review={review} setReviewOpen={setReviewOpen} reviewOpen={reviewOpen} link={link} setLink={setLink} type={type + 1} key={item.title} items={item} />)
                : 
            <Btn open={open} review={review} setOpen={setOpen} link={link} items={items} setLink={setLink} text={items.title} type={type} key={items.title} />}
        </Col>
    )
}

export const BtnText = styled(Text)`
    font-size: ${(props) => props.type === 0 ? "17px" : props.type === 1 ? "15px" : "12.8px"};
    font-weight: ${(props) => props.type === 0 ? "700" : props.type === 1 ? "600" : props.type === 2 ? "400" : "300"};
    margin-left: ${(props) => props.type === 0 && 10 || props.type === 3 && 20 || props.type === 2 && 10}px;
    line-height: ${(props) => props.type === 0 ? 18 : props.review && (props.type !== 1 || props.type !== 0) ? 18 : 16}px;
    color: ${(props) => props.type >= 2 && props.text === props.link.title && "#00dcff"};
    font-family: Montserrat;
`;

export const BtnWrap = styled(Row)`
    padding: ${(props) => props.type === 0 ? "15px 10px 10px 10px" : props.type === 1 ? "10px 10px 10px 20px;" : "8px 10px 10px 20px;"};
    cursor: pointer;
    opacity: ${(props) => props.type === 0 ? 1 : props.type === 1 || 2 ? props.text === props.link.title ? 1 : 0.9 : 0.8};
    :hover {
        opacity: 1;
    };
    transition: all 300ms;
    user-select: none;
    border-left: ${(props) => props.type <= 1 && 'solid 1px #00dcff'};
    justify-content: space-between;
    align-items: center;
`;

export const Btn = ({reviewOpen, setReviewOpen, open, setOpen, link, setLink, text, type, items, review}) => {
    return (
        <BtnWrap link={link} type={type} text={text} onClick={() => {setLink({title: text, item: items}); type !== 0 && setOpen(!open)}}>
            <Row align="center">
                {items.icon && items.icon}
                {review && type === 0 && <Flex to="cursor" zIndex={100000} width="22px" height="22px" align="center" justify="center" onClick={() => setReviewOpen(false)}>
                    <LeftIcon height={15} width={10} stroke="#00dcff" strokeWidth='5' />
                </Flex>}
                <BtnText review={review} type={type} link={link} text={text}>{text}</BtnText>
            </Row>
            <Text weight="400" size={11} color={unlimitColor}>{items.contents ? items.contents.length : items.subcontents ? items.subcontents.length : null}</Text>
        </BtnWrap>
    )
}

export default RightBar;