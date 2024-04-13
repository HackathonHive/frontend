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
import Notes from './pages/Notes';
import Quiz from './pages/Quiz';
import CourseDetailPage from './pages/CourseDetailPage';
import BottemNavigation from './components/BottemNavigation';
function App() {
  return (
    <>
    <Router>
      <Header />
      <BottemNavigation />
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/notes" element={<Notes/>}/>
      
        <Route path="/navcard" element={<NavCard />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/course/:courseId" element={<CourseDetailPage />} />

      </Routes>
    </Router>
    </>


  );
}

export default App;
