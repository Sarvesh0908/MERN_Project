import {Route,Routes,BrowserRouter} from "react-router"
<<<<<<< HEAD
import Home from "./pages/home"
import { Register } from "./pages/register_to_course"
=======
import Login from './Pages/Login'
import Signup from './Pages/Signup'


>>>>>>> 4b0439dd301822e80d8499ddebb16e5ac212b4d1

function App() {
  

  return (
    <>
       
    <BrowserRouter>
  <Routes>
<<<<<<< HEAD
      <Route path="/home" element={<Home />} />
      <Route path="/register/:id" element={<Register />} />
=======
        
        <Route path ="/Login" element={<Login/>} />
     <Route path ="/Signup"element={<Signup/>} />

>>>>>>> 4b0439dd301822e80d8499ddebb16e5ac212b4d1
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
