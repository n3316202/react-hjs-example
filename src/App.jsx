import BootStrapButton from './components/BootstrapExample';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <BrowserRouter>
      <HeaderNav/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
