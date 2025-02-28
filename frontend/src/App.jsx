import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path='/' 
        element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>} 
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
