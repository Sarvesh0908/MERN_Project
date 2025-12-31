import Signin from "./pages/Signin"
import Home from "./pages/Home"
import VideosByCourse from "./pages/VideoByCourse"
import AllVideo from "./pages/AllVideo"
import AddVideo from "./pages/AddVideo"
import UpdateVideo from "./pages/updateVideo"

import { Route, Routes, Navigate } from "react-router"
import { createContext, useState } from "react";

export const LoginContext = createContext()

function App() {
  const [loginStatus, setLoginStatus] = useState(
    sessionStorage.getItem("token") ? true : false
  );


  return (
    <>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={loginStatus ? <Home /> : <Navigate to="/" />} />
          <Route path='/my-videos/:course_id' element={loginStatus ? <VideosByCourse /> : <Navigate to="/" />} />
          <Route path='/allvideos' element={loginStatus ? <AllVideo /> : <Navigate to="/" />} />
          <Route path='/addvideos' element={loginStatus ? <AddVideo /> : <Navigate to="/" />} />        <Route path='/allvideos' element={loginStatus ? <AllVideo /> : <Navigate to="/" />} />
          <Route path='/update-video/:id' element={loginStatus ? <UpdateVideo /> : <Navigate to="/" />} />
        </Routes>


 
      </LoginContext.Provider>

    </>
  )
}

export default App
