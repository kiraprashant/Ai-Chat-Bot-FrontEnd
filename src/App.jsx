import { useState } from 'react'
import Home from './pages/Home'
import Sidebar from './cmp/Sidebar'
import { Box } from '@mui/material'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Box
      sx={{
        display: "flex",
        height: "100vh", // Full screen height
        width:"100vw"
      }}
    >
        <Sidebar />
        <Home />
    </Box> */}
    
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
