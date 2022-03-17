import React, {useState} from 'react';

import AI from './ai';
import Landing from './landing';
import Life from './life';
import UniversalPhysics from './universalphysics';

export const Screen = ({route, setRoute}) => {
    return (
        <div width="100vw" height="100vh">
            {/* <Landing route={route} setRoute={setRoute} /> */}
            <AI route={route} setRoute={setRoute} />
            <Life route={route} setRoute={setRoute} />
            <UniversalPhysics route={route} setRoute={setRoute} />
        </div>
    )
};

export default Screen;