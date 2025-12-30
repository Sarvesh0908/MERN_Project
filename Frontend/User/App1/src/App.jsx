import {Route,Routes,BrowserRouter} from "react-router"
import Login from './Pages/Login'
import Signup from './Pages/Signup'



function App() {
  

  return (
    <>
       
    <BrowserRouter>
  <Routes>
        
        <Route path ="/Login" element={<Login/>} />
     <Route path ="/Signup"element={<Signup/>} />

      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
