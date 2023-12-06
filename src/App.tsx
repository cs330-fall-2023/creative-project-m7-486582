import React, { FC, useEffect, useState } from 'react';
import './App.css';
import WelcomePage from './pages/welcome';
import PoemsPage from './pages/poems'
import GalleryPage from './pages/gallery';
import AccountPage from './pages/account';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserType } from './utils/types/UserTypes';

const App: FC = () => {

  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    let uid = localStorage.getItem("uid")
    if (uid) {
      fetch(`http://localhost:3001/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ uid })
      })
        .then(res => res.json())
        .then(data => {
          if (data.ok) {
            setUser(data.user)
          }
        })
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/gallery" element={<GalleryPage
            user={user}
          />} />
          <Route path="/view" element={<PoemsPage
            user={user}
          />} />
          <Route path="/account" element={
            <AccountPage
              user={user}
              setUser={setUser}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
