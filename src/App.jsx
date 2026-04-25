import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserDetail from './components/UserDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
