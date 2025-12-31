import Home from "./pages/home"
import Profile from "./pages/profile"
import Login from "./pages/Login"
import {Route,Routes,BrowserRouter} from "react-router"
import Signup from "./pages/Signup"
import Mycourses from './pages/mycourses';
import { Register } from "./pages/register_to_course"
import VideosByCourse from './pages/mycourseswithvideo';
import ChangePassword from "./pages/changepass"


function App() {
  

  return (
    <>
       
    <BrowserRouter>
  <Routes>
       <Route path="/*" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/register/:id" element={<Register />} />
       <Route path="/home" element={<Home />} />
       <Route path="/mycourses" element={<Mycourses/>} />
       <Route path="/mycourseswithvideo/:course_id" element={<VideosByCourse />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/changepass" element={<ChangePassword />} />
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
