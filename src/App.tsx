import React, { FC, useEffect } from 'react';
import './App.css';
import WelcomePage from './pages/welcome';
import PoemsPage from './pages/poems'
import GalleryPage from './pages/gallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(0)
  const pages = [
    <WelcomePage
      setCurrentPage={setCurrentPage}
    />,
    <PoemsPage />
  ]

  useEffect(() => {
    const poemsPage = document.getElementById("poems-page")
    const welcomePage = document.getElementById("welcome-page")

    if (poemsPage && welcomePage) {
      if (currentPage === 0) {
        welcomePage.style.display = "block"
        poemsPage.classList.remove("active")
        setTimeout(() => {
          welcomePage.classList.add("active")
        }, 500)
        setTimeout(() => {
          poemsPage.style.display = "none"
        }, 1000)
      } else if (currentPage === 1) {
        poemsPage.style.display = "block"
        welcomePage.classList.remove("active")
        setTimeout(() => {
          poemsPage.classList.add("active")
        }, 500)
        setTimeout(() => {
          welcomePage.style.display = "none"
        }, 1000)
      }
    }
  }, [currentPage])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <div className={"page"} id="welcome-page">
              <WelcomePage
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className={"page"} id="poems-page">
              <PoemsPage />
            </div>
          </>
          } />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
