import React, { FC, useEffect } from 'react';
import './App.css';
import WelcomePage from './pages/welcome';
import PoemsPage from './pages/poems'
import GalleryPage from './pages/gallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/view" element={<PoemsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
