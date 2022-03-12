import React, {useState} from 'react';
import GlobalStyle from './styles/globalStyles';

//components
import Header from './components/header';
import Footer from './components/footer';

//screens
import Landing from './screens/landing';
import Report from './screens/report';

export const App = ({}) => {
  const [screen, setScreen] = useState(0);
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <GlobalStyle />
      <Header screen={screen} setScreen={setScreen} />
      <Landing screen={screen} setScreen={setScreen} />
      <Footer />
    </div>
  )
};

export default App;