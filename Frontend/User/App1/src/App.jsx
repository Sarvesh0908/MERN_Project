import {Route,Routes,BrowserRouter} from "react-router"
import Home from "./pages/home"
import { Register } from "./pages/register_to_course"
import Login from './Pages/Login'
import Signup from './Pages/Signup'



function App() {
  

  return (
    <>
       
    <BrowserRouter>
  <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register/:id" element={<Register />} />
        
        <Route path ="/Login" element={<Login/>} />
     <Route path ="/Signup"element={<Signup/>} />

      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
