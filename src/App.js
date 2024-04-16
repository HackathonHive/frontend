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
import NavCard from './components/NavCard';
import Header from './components/Header';
import Notes from './pages/Notes';
import Quiz from './pages/Quiz';
import CourseDetailPage from './pages/CourseDetailPage';
import BottemNavigation from './components/BottemNavigation';
import { ToastContainer, toast } from 'react-toastify';
import ProfileCard from './components/ProfileCard';
import 'react-toastify/dist/ReactToastify.css';
import CoursePage from './pages/CoursePage';
import AIPage from './pages/AIPage';
function App() {
  return (
    <>
    <Router>
      <Header />
      <BottemNavigation />
      
    <div className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `} style={{ height: '100%' }}>
      <div className='hidden md:block gap-4 col-span-1'>
        <ProfileCard />
        <NavCard />
      </div>
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/courses" element={<CoursePage/>}/>
      
        <Route path="/navcard" element={<NavCard />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        <Route path="/ai" element={<AIPage />} />

      </Routes>
      <ToastContainer />
    </div>

    </Router>
    </>


  );
}

export default App;
