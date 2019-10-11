import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import Menu from './components/Menu/Menu';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
      <div className="main-container">
        <BrowserRouter >
          <Aside />
          <Menu />
          <MainContent />
        </BrowserRouter>
      </div>
  );
}

export default App;