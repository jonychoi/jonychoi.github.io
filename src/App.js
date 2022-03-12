import React from 'react';

import Screen from './components/screen';
import Header from './components/common/header';
import DockBar from './components/common/dockbar';
import GlobalStyle from './styles/globalStyles';
import { ThemeEvent } from './contexts/globalContext';

export const App = ({}) => {
    const {darkMode} = ThemeEvent();
    return (
        <div width="100vw" height="100vh">
            <GlobalStyle darkMode={darkMode} />
            <Screen />
            <Header />
            <DockBar />
        </div>
    )
}

export default App;