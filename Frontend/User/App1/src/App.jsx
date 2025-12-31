import { Route, Routes, BrowserRouter } from "react-router"
import Home from "./pages/Home";
import { Register } from "./pages/register_to_course";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register/:id" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mycourses" element={<Mycourses />} />
          <Route path="/mycourseswithvideo/:course_id" element={<VideosByCourse />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepass" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
