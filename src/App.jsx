import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
// import { Home, Explore, Login, CreateMeetup } from './pages';
import Home from './pages/home';
import Explore from './pages/explore';
import Login from './pages/login';
import CreateMeetup from './pages/create-meetup';



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create-meetup" element={<CreateMeetup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
