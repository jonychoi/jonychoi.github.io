import React, {useState, useEffect} from 'react';
import {Flex, Col ,Row} from '../../components/common/base';
import lab from './data/lab';
import overview from './data/overview';
import study from './data/study';
import team from './data/team';


import Header from './header';
import Main from './main';
import ProgressBar from './progressbar';

const contents = overview.concat(study, lab, team);

export const Report = ({darkMode}) => {
    const [page, setPage] = useState(0);
    const [content, setContent] = useState(contents[page]);
    useEffect(() => {
        const setter = () => {
            setContent(contents[page]);
        };
        setter();
    }, [page]);
    return (
        <Col bg={darkMode ? "black" : "white"} padding="padding: 8% 15%" zIndex={100} style={{width: "100vw", height: "100vh", overflow: 'hidden', overflowY:'scroll', position: 'fixed', top: 0, left: 0}}>
            <Header page={page} setPage={setPage} darkMode={darkMode} />
            <ProgressBar page={page} setPage={setPage} darkMode={darkMode} />
            <Main content={content} page={page} setPage={setPage} darkMode={darkMode} />
        </Col>
    )
};

export default Report;