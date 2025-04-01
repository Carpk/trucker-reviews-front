import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Reviews from './pages/Reviews';



import './App.css'

function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
