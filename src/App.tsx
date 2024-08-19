import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { LightTheme } from './components/Themes/Theme';
import GlobalStyle from './GlobalStyle';

import { Home, About, Work, Skills } from './index';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
