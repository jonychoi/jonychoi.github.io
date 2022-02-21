import React from 'react';
import './menu.css';
import {CategoryBarEvent} from '../../contexts/GlobalContext';
import {Flex} from '../common/base';

export const Menu = ({darkMode}) => {
    const {categoryBar, setCategoryBar} = CategoryBarEvent();
    const click = () => {
        var para = document.getElementById("toggle-icon");
        para.classList.toggle("rotate-icon");
        setCategoryBar(!categoryBar);
    }    
    return (
        <Flex id="toggle-icon" onClick={() => click()}>
            <Flex className="bar1" bg={darkMode ? "white" : "black"}></Flex>
            <Flex className="bar2" bg={darkMode ? "white" : "black"}></Flex>
            <Flex className="bar3" bg={darkMode ? "white" : "black"}></Flex>
        </Flex>
    )
};

export default Menu;