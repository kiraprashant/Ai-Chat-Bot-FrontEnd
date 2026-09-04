import { useState } from 'react'
import Home from './cmp/ChatConversion'
import Sidebar from './cmp/Sidebar'
import { Box } from '@mui/material'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ChatRoom from './pages/ChatRoom'
import ChatConversion from './cmp/ChatConversion'
import Profile from './pages/Profile'
import ProfileInformation from './cmp/ProfileInformation'
import AccountSetting from './pages/AccountSetting'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
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
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat-room" element={<ChatRoom />} >
          <Route path="" element={<ChatConversion />} /> 
          <Route path=":id" element={<ChatConversion />} />
        </Route>
           <Route path='/profile' element={<Profile />} >
           <Route path="/profile/" element={<ProfileInformation />} />
           <Route path='/profile/account' element={<AccountSetting />} />
        </Route>


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
