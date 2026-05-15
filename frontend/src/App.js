import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './Pages/landing.jsx';
import Authentication from './Pages/authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import VideoMeetComponent from './Pages/VideoMeet.jsx';
import HomeComponent from './Pages/home.jsx';
import History from './Pages/history.jsx';

function App() {
  return (
    <div className="App">

   
     <Router>

           <AuthProvider>
          <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/auth' element={<Authentication />} />
             <Route path='/home's element={<HomeComponent />} />
             <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
             </Routes>

            </AuthProvider>

      </Router>
    </div>
  );
}

export default App;
