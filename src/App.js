import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
// <<<<<<< HEAD
import SignUp from './pages/SignUp';
// =======
import LoginPage from './pages/LoginPage';

import NavCard from './components/NavCard';

import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      
        <Route path="/navcard" element={<NavCard />}/>

      </Routes>
    </Router>
    </>


  );
}

export default App;
