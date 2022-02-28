import React, {useState, useEffect} from 'react';
import {Flex, Col ,Row} from '../../components/common/base';
import lab from './data/lab';
import overview from './data/overview';
import paperstudy from './data/paperstudy';
import codingstudy from './data/codingstudy';
import team from './data/team';
import neuralverse from './data/neuralverse';
import eccv from './data/eccv';


import Header from './header';
import Main from './main';
import ProgressBar from './progressbar';

const contents = overview.contents.concat(paperstudy.contents, codingstudy.contents, lab.contents, team.contents, neuralverse.contents, eccv.contents);

export const Report = ({darkMode}) => {
    const [page, setPage] = useState(0);
    const [content, setContent] = useState(contents[page]);
    const [head, setHead] = useState(overview.title);
    
    const l1 = overview.contents.length
    const l2 = paperstudy.contents.length;
    const l3 = codingstudy.contents.length;
    const l4 = lab.contents.length;
    const l5 = team.contents.length;
    const l6 = neuralverse.contents.length;
    const l7 = eccv.contents.length;

    useEffect(() => {
        const setter = () => {
            setContent(contents[page]);
            if (page >= 0 && page < l1){
                setHead(overview.title);
            } else if (page >= l1 && page < l1 + l2){
                setHead(paperstudy.title)
            } else if (page >= l1 + l2 && page < l1 + l2 + l3){
                setHead(codingstudy.title)
            } else if (page >= l1 + l2 + l3 && page < l1 + l2 + l3 + l4){
                setHead(lab.title)
            } else if (page >= l1 + l2 + l3 + l4 && page < l1 + l2 + l3 + l4 + l5){
                setHead(team.title);
            } else if (page >= l1 + l2 + l3 + l4 + l5 && page < l1 + l2 + l3 + l4 + l5 + l6){
                setHead(neuralverse.title);
            } else if (page >= l1 + l2 + l3 + l4 + l5 + l6 && page < l1 + l2 + l3 + l4 + l5 + l6 + l7){
                setHead(eccv.title);
            }
        };
        setter();
        console.log(page);
    }, [page]);
    return (
        <Col bg={darkMode ? "black" : "white"} padding="padding: 8% 15%" zIndex={100} style={{width: "100vw", height: "100vh", overflow: 'hidden', overflowY:'scroll', position: 'fixed', top: 0, left: 0}}>
            <Header page={page} setPage={setPage} darkMode={darkMode} />
            <ProgressBar page={page} setPage={setPage} darkMode={darkMode} />
            <Main head={head} content={content} page={page} setPage={setPage} darkMode={darkMode} />
        </Col>
    )
};

export default Report;