import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';

const App = () => (
  <Main>
    <Sidebar>
      <About />
    </Sidebar>
    <Info>

    </Info>
  </Main>
);

export default App;