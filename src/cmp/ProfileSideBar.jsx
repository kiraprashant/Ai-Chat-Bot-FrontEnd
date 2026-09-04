import React, { useEffect, useState } from "react";
import { Box, Icon } from "@mui/material";
import { IoMdLogOut } from "react-icons/io";
import { FiSidebar } from "react-icons/fi";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import {AddToChat} from "../Redux/Slices/ChatSlices"
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const ProfileSideBar = () => {

    const [Toggle, setToggle] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [unique,setunique] = useState(uuidv4())



    const [AllList,setAllList] = useState()

    const data = [
        {
            id: "profile-information",
            Name: "Profile Information",
            NavLink: "/profile/",
            Icon: "User",
        },
        {
            id: "account",
            Name: "Account",
            NavLink: "/profile/account",
            Icon: "Settings",
        },
        {
            id: "account-status",
            Name: "Account Status",
            NavLink: "/profile/status",
            Icon: "Activity",
        },
        {
            id: "quick-actions",
            Name: "Quick Actions",
            NavLink: "/profile/actions",
            Icon: "Zap",
        },
        {
            id: "account-verification",
            Name: "Account Verification",
            NavLink: "/profile/verification",
            Icon: "ShieldCheck",
        },
        {
            id: "account-usage",
            Name: "Account Usage",
            NavLink: "/profile/usage",
            Icon: "BarChart3",
        },
    ];

    return (
        <Box
        
          sx={{
            width: Toggle ? "360px" : "60px",
            backgroundColor: "#000021",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "16px",
              p: 2,
              mb: 2,
            }}
          >
            {Toggle ? <PiCodesandboxLogoFill size={24} /> : null}
            <FiSidebar onClick={() => setToggle(!Toggle)} size={24} />
          </Box>
          <Link 
           style={{
              color:"white",
                textDecoration:"none"
           }}
          to = {`${unique}`}> 
          <Box sx={{ px: 1 }}>
            
          </Box>
          </Link>
          {/* Top + Middle */}
          <Box sx={{ flexGrow: 1, overflow: "auto" }}>
            {/* Header */}
    
            {/* Menu */}
    
            {Toggle ? (
              <Box sx={{ p: 1 }}>
                {data.map((elem,i) => (
                  <ProfileMenu
                    key={i}
                    data={elem}
                  />
                ))}
    
              </Box>
            ) : null}
          </Box>
    
          {/* Bottom */}
          <Box
            sx={{
              borderTop: "1px solid #1e1e1e",
              backgroundColor: "#000021",
    
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {Toggle ? <Typography variant="body1">Prashant Nair</Typography> : null}
            <IoMdLogOut size={24} color="red" />
          </Box>
        </Box>
      );
  
}

export default ProfileSideBar