import React from 'react'
import { Box } from '@mui/material'
import Sidebar from '../cmp/Sidebar'
import Home from '../cmp/ChatConversion'
import { BrowserRouter, Routes, Route, Navigate,Outlet } from "react-router-dom";



const ChatRoom = () => {
  return (
        <Box
      sx={{
        display: "flex",
        height: "100vh", // Full screen height
        width:"100vw"
      }}
    >
        <Sidebar />
        {/* Conversion */}
        {/* <Home /> */}
        <Outlet />
    </Box> 
  )
}

export default ChatRoom