import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { ThemeEvent } from './contexts/GlobalContext';
import {GlobalBgStyler} from './styles/styles';

//components

import Header from './components/header';
import Footer from './components/footer';

//screens

import Landing from './screens/landing';
import CategoryBar from './components/categorybar';
import Report from './screens/report';

export const App = ({}) => {
  const {darkMode} = ThemeEvent();
  return (
    <div style={{height: '100vh', width: '100vw', backgroundColor: GlobalBgStyler(darkMode), transition: 'background-color 500ms'}}>
      <GlobalStyle darkMode={darkMode} />
      <Header />
      <Report darkMode={darkMode} />
      <Landing darkMode={darkMode} />
      <CategoryBar darkMode={darkMode} />
      <Footer />
    </div>
  )
};

export default App;