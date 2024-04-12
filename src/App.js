import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

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
