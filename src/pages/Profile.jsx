import React,{useEffect} from 'react'
import { Box } from '@mui/material'
import Sidebar from '../cmp/Sidebar'
import Home from '../cmp/ChatConversion'
import { BrowserRouter, Routes, Route, Navigate,Outlet } from "react-router-dom";
import ProfileSideBar from '../cmp/ProfileSideBar';
import { GetProfileBYID } from "../Redux/Slices/UserSlices";
import { useDispatch, useSelector } from "react-redux";


const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProfileBYID());
  }, [dispatch]);
 
    return (
    <Box
      sx={{
        display: "flex",
        height: "100vh", // Full screen height
        width:"100vw"
      }}
    >
       <ProfileSideBar />
        {/* Conversion */}
        {/* <Home /> */}
        <Outlet />
    </Box> 
  )
}

export default Profile