import {Route,Routes,BrowserRouter} from "react-router"
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import profile from './Pages/Profile'





function App() {
  

  return (
    <>
       
    <BrowserRouter>
  <Routes>
        
        <Route path ="/Login" element={<Login/>} />
     <Route path ="/Signup"element={<Signup/>} />
      <Route path ="/profile" element={<profile/>} />

      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
