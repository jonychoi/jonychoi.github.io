import React from 'react';

import Screen from './components/screen';
import Header from './components/common/header';
import DockBar from './components/common/dockbar';
import GlobalStyle from './styles/globalStyles';
import { ThemeEvent, RouteEvent } from './contexts/globalContext';
import RightBar from './components/common/rightbar';

export const App = ({}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    const {route, setRoute} = RouteEvent();
    return (
        <div width="100vw" height="100vh">
            <GlobalStyle darkMode={darkMode} />
            <Screen route={route} setRoute={setRoute} />
            <Header darkMode={darkMode} setDarkMode={setDarkMode} route={route} />
            <RightBar route={route} setRoute={setRoute} />
            <DockBar route={route} setRoute={setRoute} />
        </div>
    )
}

export default App;