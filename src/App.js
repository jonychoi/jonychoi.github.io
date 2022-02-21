import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { ThemeEvent } from './contexts/GlobalContext';

//screens

import Landing from './screens/landing';

export const App = ({}) => {
  const {darkMode} = ThemeEvent();
  return (
    <div>
      <GlobalStyle darkMode={darkMode} />
      <Header />
      <Landing />
      <Footer />
    </div>
  )
};

export default App;