import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';<<<<<<< HEAD
import SignUp from './pages/SignUp';
=======
import LoginPage from './pages/LoginPage';
>>>>>>> eef073365934cb70e16b01b8cbd03ac9823b7c98

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage />} />


      <Route path="/login" element={<LoginPage/>}/>


      </Routes>
    </Router>
    </>


  );
}

export default App;
