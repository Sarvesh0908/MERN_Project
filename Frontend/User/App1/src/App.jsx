import {Route,Routes,BrowserRouter} from "react-router"
import Home from "./pages/home"
import { Register } from "./pages/register_to_course"

function App() {
  

  return (
    <>
       
    <BrowserRouter>
  <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/register/:id" element={<Register />} />
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
