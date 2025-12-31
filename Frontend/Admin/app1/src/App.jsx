import Signin from "./pages/Signin"
import Home from "./pages/Home"
import AllStudents from "./pages/AllStudents"
import UpdateCourse from "./pages/updateCourses" 


import { Route,Routes,Navigate } from "react-router"
import { createContext,useState } from "react";

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
  <Route path="/home" element={loginStatus ? <Home /> : <Navigate to="/"/> } />
  <Route path='/allstudents' element={loginStatus ? <AllStudents/> : <Navigate to="/"/>}/>
  <Route path="/updatecourse/:id" element={loginStatus ? <UpdateCourse /> : <Navigate to="/"/>} />


</Routes>



</LoginContext.Provider>
      
    </>
  )
}

export default App
