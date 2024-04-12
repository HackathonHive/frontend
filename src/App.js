import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from 'react-router-dom';

import HomePage from './users/pages/HomePage';
import DashBoardPage from './sellers/pages/DashBoardPage'; 

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/user/"  element={<HomePage />} />
        <Route  path="/seller/" element={<DashBoardPage />} />





      </Routes>
    </Router>
    </>


  );
}

export default App;
