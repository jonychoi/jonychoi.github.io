import React from 'react';
import {Row, Text, Flex} from './base';
import {LawIcon, Logo, AtomIcon, UniversalIcon, LifeIcon} from '../icons/main';
import { unlimitColor } from '../../styles';

export const Header = ({route}) => {
    return (
        <Row zIndex={1000} height="80px" width="100%" style={{top: 0}} position="fixed" padding="padding: 15px;" align="center" >
                {route === 1 && <Flex width="50px" height="50px" align="center" justify="center">
                    <Logo height={20} width={40} stroke={"white"} stroke={unlimitColor} />
                </Flex>}
                {route === 2 && <Flex width="50px" height="50px" align="center" justify="center">
                    <AtomIcon width={30} height={30} stroke={unlimitColor} />
                </Flex>}
                {route === 3 && <Flex width="50px" height="50px" align="center" justify="center">
                    <UniversalIcon height={30} stroke={unlimitColor} />
                </Flex>}
                {route === 4 && <Flex width="50px" height="50px" align="center" justify="center">
                    <LifeIcon width={30} height={30} stroke={"white"} stroke={unlimitColor} />
                </Flex>}
                {route === 5 && <Flex width="50px" height="50px" align="center" justify="center">
                    <LawIcon stroke={unlimitColor} />
                </Flex>}
            <Text size="20" weight='300' className="mont" margin="margin-left: 20px;">What is Real LAB</Text>
        </Row>
    )
};

export default Header;