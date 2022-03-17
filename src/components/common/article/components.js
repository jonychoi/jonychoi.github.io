import React, {useState} from 'react';
import {Flex, Col, Row, Text} from '../base';
import {opaciter, unlimitColor} from '../../../styles';

export const StatusBar = ({}) => {
    return (
        <Col margin="margin-bottom: 20px;">
            <Col>
                <Row>
                    <Text size="12.8" color={opaciter(0.6)}>Artificial Intelligence</Text>
                    <Text size="12.8" margin="margin: 0px 10px;" color={opaciter(0.6)}>></Text>
                    <Text size="12.8" color={opaciter(0.6)}>Conventional A.I</Text>
                    <Text size="12.8" margin="margin: 0px 10px;" color={opaciter(0.6)}>></Text>
                    <Text size="12.8" color={opaciter(0.6)}>States & Search</Text>
                </Row>
                <Flex margin="margin-top: 20px;" position="relative">
                    <Flex width="30%" height="2px" bg={unlimitColor} opacity={0.5} zIndex={10} position="absolute" />
                    <Flex width="10%" height="2px" style={{left: '20%'}} bg={unlimitColor} zIndex={10} position="absolute" />
                    <Flex width="100%" height="2px" bg={opaciter(0.25)} position="absolute" />
                </Flex>
            </Col>
        </Col>
    )
}

export const ArticleComponent = ({content}) => {
    return (
        <Col width="100%">
            <ArticleTop content={content} />
            <ArticleMain content={content} />
            <ArticleBottom content={content} />
        </Col>
    )
};

export const ArticleTop = ({content}) => {
    return (
        <Col width="100%">
            <StatusBar content={content} />
            <Text size="30" weight="700">{content.title}</Text>
            <Row margin="margin: 10px 0px;" justify="space-between" width="100%">
                <Row margin="margin: 5px 0px;">
                    <Text weight="300" size="12" color={opaciter(0.6)}>Written at {content.date}</Text>
                    <Text weight="300" size="12" margin="margin-left: 20px;" color={opaciter(0.6)}>Last modified at 2022</Text>
                </Row>
                <Text size="14" weight="500">{content.authorname}</Text>
            </Row>
        </Col>
    )
};

export const ArticleMain = ({}) => {
    return (
        <Col>
        
        </Col>
    )
}

export const ArticleBottom = ({}) => {
    return (
        <Col>
        
        </Col>
    )
};