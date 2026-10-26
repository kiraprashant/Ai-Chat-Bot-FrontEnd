import React,{useEffect} from 'react'
import { Box } from '@mui/material'
import Sidebar from '../cmp/Sidebar'
import Home from '../cmp/ChatConversion'
import { BrowserRouter, Routes, Route, Navigate,Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddToChat,GetAllchat } from "../Redux/Slices/ChatSlices";



const ChatRoom = () => {
  const Dispatch = useDispatch()


  useEffect(() => {
    const fetchChatHistory = async () => {
      console.log("Caaliling")
      try {
        const response = await axios.post(
          "http://localhost:8080/api/ChatHistory/GetChatHistory",
          {
            Email: "Nair@GMAIL.COM",
          }
        );
  
        console.log("Chat history:", response.data.data);
        Dispatch(GetAllchat(response.data.data));

      } catch (error) {
        console.error(
          "Failed to fetch chat history:",
          error.response?.data || error.message
        );
      }
    };
  
    fetchChatHistory();
  }, []);


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