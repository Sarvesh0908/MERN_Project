import {Route,Routes,BrowserRouter} from "react-router"
<<<<<<< HEAD
<<<<<<< HEAD
import Home from "./pages/home"
import { Register } from "./pages/register_to_course"
=======
=======
import Home from "./pages/home"
import { Register } from "./pages/register_to_course"
>>>>>>> c295f0eb4afc4b64b9f03030b97ef39e774d04ee
import Login from './Pages/Login'
import Signup from './Pages/Signup'


<<<<<<< HEAD
>>>>>>> 4b0439dd301822e80d8499ddebb16e5ac212b4d1
=======
>>>>>>> c295f0eb4afc4b64b9f03030b97ef39e774d04ee

function App() {
  

  return (
    <>
       
    <BrowserRouter>
  <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
      <Route path="/home" element={<Home />} />
      <Route path="/register/:id" element={<Register />} />
=======
=======
      <Route path="/home" element={<Home />} />
      <Route path="/register/:id" element={<Register />} />
>>>>>>> c295f0eb4afc4b64b9f03030b97ef39e774d04ee
        
        <Route path ="/Login" element={<Login/>} />
     <Route path ="/Signup"element={<Signup/>} />

<<<<<<< HEAD
>>>>>>> 4b0439dd301822e80d8499ddebb16e5ac212b4d1
=======
>>>>>>> c295f0eb4afc4b64b9f03030b97ef39e774d04ee
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
