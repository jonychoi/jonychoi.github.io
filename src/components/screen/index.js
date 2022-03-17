import React, {useEffect, useState} from 'react';
import Article from '../common/article';

import Landing from './landing';
import Jony from './jony';

import ai from './ai';
import life from './life';
import up from './universalphysics';

export const Screen = ({route, setRoute}) => {
    const [contents, setContents] = useState(null)
    useEffect(() => {
        const router = () => {
            if (route === 2){
                return setContents(ai)
            } else if (route === 3){
                return setContents(up)
            } else if (route === 4){
                return setContents(life)
            }
        }
        router();
    }, [route]);
    return (
        <div width="100vw" height="100vh">
            {(route === 0 || route === 1) && <Landing route={route} setRoute={setRoute} />}
            {(route === 2 || route === 3 || route === 4) && <Article content={ai.contents[0]} />}
            {route === 5 && <Jony route={route} setRoute={setRoute} />}
        </div>
    )
};

export default Screen;