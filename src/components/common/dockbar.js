import React from 'react';
import {Row, Flex, Col, Text} from './base';
import {darklight} from '../../styles';
import styled from 'styled-components';
import { AtomIcon, LawIcon, LifeIcon, Logo, UniversalIcon } from '../icons/main';

const BtnWrap = styled(Col)`
    :hover {
        margin-bottom: 30px;
        svg {
            path, circle {
                stroke: #00dcff;
            }
            .bothsvg {
                stroke: #00dcff;
                fill: #00dcff;
            }
        };
        .hover {
            background-color: #00dcff;
        }
    };
    transition: all 300ms;
    align-items: center;
    user-select: none;
    cursor: pointer;
    width: 150px;
    height: 70px;
    justify-content: space-between;
`;

export const DockBar = ({}) => {
    return (
        <Flex height="80px" width="80%" position="fixed" style={{bottom: 10, left: '10%'}}>
            <Row justify="space-between" align="center" width="100%" height="100%">
                <BtnWrap>
                    <Flex align="center" justify="center" flex={1}>
                        <Logo height={30} width={50} stroke={"white"} />
                    </Flex>
                    <Text className='mont' margin="margin-top: 10px;">Main</Text>
                </BtnWrap>
                <BtnWrap>
                    <Flex align="center" justify="center" flex={1}>
                        <AtomIcon width={40} height={40} />
                    </Flex>
                    <Text className='mont' margin="margin-top: 10px;">A.I</Text>
                </BtnWrap>
                <BtnWrap>
                    <Flex align="center" justify="center" flex={1}>
                        <UniversalIcon height={45} />
                    </Flex>
                    <Text className='mont' margin="margin-top: 10px;">Universal Physics</Text>
                </BtnWrap>
                <BtnWrap>
                    <Flex align="center" justify="center" flex={1}>
                        <LifeIcon width={30} height={51} stroke={"white"} />
                    </Flex>
                    <Text className='mont' margin="margin-top: 10px;">Life</Text>
                </BtnWrap>
                <BtnWrap>
                    <Flex align="center" justify="center" flex={1}>
                        <LawIcon />
                    </Flex>
                    <Text className='mont' margin="margin-top: 10px;">Jony Choi</Text>
                </BtnWrap>
            </Row>
        </Flex>
    )
};

export default DockBar;