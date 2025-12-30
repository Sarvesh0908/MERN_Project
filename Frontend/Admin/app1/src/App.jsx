import Signin from "./pages/Signin"
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
</Routes>



</LoginContext.Provider>
      
    </>
  )
}

export default App
