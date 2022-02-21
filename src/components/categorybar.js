import React from 'react';
import {Flex, Col, Row, Text, Box} from './common/base';
import {bgStyler} from '../styles/styles';
import { CategoryBarEvent } from '../contexts/GlobalContext';
import styled from 'styled-components';

export const MenuLink = ({text}) => {
    return (
        <a>
            <Text>{text}</Text>
        </a>
    )
}

export const CategoryBar = ({darkMode}) => {
    const {categoryBar} = CategoryBarEvent();
    return (
        <Box bg={bgStyler(darkMode)} width="350px" height="100%" position="fixed" style={{right: categoryBar ? 0 : '-350px', transition: 'all 300ms'}}>

        </Box>
    )
};

export default CategoryBar;