import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Reviews from './pages/Reviews';
import Dashboard from './pages/Dashboard';



function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
