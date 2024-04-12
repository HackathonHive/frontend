import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

import SignUp from './pages/SignUp';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>


      </Routes>
    </Router>
    </>


  );
}

export default App;
