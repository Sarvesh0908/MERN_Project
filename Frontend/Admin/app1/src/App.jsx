import Signin from "./pages/Signin"
import Home from "./pages/Home"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d2c2b60766b05e58d645cb15ae2e46992afd6863
import AllStudents from "./pages/AllStudents"
import UpdateCourse from "./pages/updateCourses" 
import AddCourses from "./pages/AddCourses"
import AllCourses from './pages/AllCourses';

<<<<<<< HEAD
=======
import VideosByCourse from "./pages/VideoByCourse"
import AllVideo from "./pages/AllVideo"
import AddVideo from "./pages/AddVideo"
import UpdateVideo from "./pages/updateVideo"
>>>>>>> f1bc5162619a0d8f4df61790f88c3e0845b9d7ba
=======
>>>>>>> d2c2b60766b05e58d645cb15ae2e46992afd6863

import { Route, Routes, Navigate } from "react-router"
import { createContext, useState } from "react";

export const LoginContext = createContext()

function App() {
  const [loginStatus, setLoginStatus] = useState(
    sessionStorage.getItem("token") ? true : false
  );


  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d2c2b60766b05e58d645cb15ae2e46992afd6863
<LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
<Routes>
  <Route path="/" element={<Signin />} />
  <Route path="/home" element={loginStatus ? <Home /> : <Navigate to="/"/> } />
  <Route path='/allstudents' element={loginStatus ? <AllStudents/> : <Navigate to="/"/>}/>
  <Route path="/updatecourse/:id" element={loginStatus ? <UpdateCourse /> : <Navigate to="/"/>} />
  <Route path='/addcourse' element={loginStatus ? <AddCourses/> : <Navigate to="/"/>}/>
  <Route path='/allcourse' element={loginStatus ? <AllCourses/> : <Navigate to="/"/>}/>
       

<<<<<<< HEAD
</Routes>
=======
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={loginStatus ? <Home /> : <Navigate to="/" />} />
          <Route path='/my-videos/:course_id' element={loginStatus ? <VideosByCourse /> : <Navigate to="/" />} />
          <Route path='/allvideos' element={loginStatus ? <AllVideo /> : <Navigate to="/" />} />
          <Route path='/addvideos' element={loginStatus ? <AddVideo /> : <Navigate to="/" />} />        <Route path='/allvideos' element={loginStatus ? <AllVideo /> : <Navigate to="/" />} />
          <Route path='/update-video/:id' element={loginStatus ? <UpdateVideo /> : <Navigate to="/" />} />
        </Routes>
>>>>>>> f1bc5162619a0d8f4df61790f88c3e0845b9d7ba

=======
>>>>>>> d2c2b60766b05e58d645cb15ae2e46992afd6863


      </LoginContext.Provider>

    </>
  )
}

export default App
