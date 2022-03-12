import React from 'react';
import Main from './components';

export const Intro = ({darkMode}) => {
    return (
        <div style={{width: "100vw", height: "100vh", overflow: 'hidden', overflowY:'scroll', position: 'fixed', top: 0, left: 0}}>
            <Main darkMode={darkMode} />
        </div>
    )
};

export default Intro;