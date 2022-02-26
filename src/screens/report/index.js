import React, {useState, useEffect} from 'react';
import {Flex, Col ,Row} from '../../components/common/base';

import Header from './header';
import Main from './main';
import ProgressBar from './progressbar';

export const Report = ({darkMode}) => {
    const [page, setPage] = useState(0);
    return (
        <Col bg={darkMode ? "black" : "rgb(245, 245, 245)"} padding="padding: 8% 15%" zIndex={100} style={{width: "100vw", height: "100vh", overflow: 'hidden', overflowY:'scroll', position: 'fixed', top: 0, left: 0}}>
            <Header page={page} setPage={setPage} darkMode={darkMode} />
            <Main page={page} setPage={setPage} darkMode={darkMode} />
            <ProgressBar page={page} setPage={setPage} darkMode={darkMode} />
        </Col>
    )
};

export default Report;