import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import "./App.css"
import { AuthContextProvider } from "./authentication/Auth";
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  return (
    <>
    
      <AuthContextProvider>

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<ProtectedRoutes><Account /></ProtectedRoutes>}/>

        </Routes> 

      </AuthContextProvider>
  
    </>
  );
}

export default App;
