
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { IoMdLogOut } from "react-icons/io";
import { FiSidebar } from "react-icons/fi";
import { PiArrowLeft } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaUserCog,
  FaBolt,
  FaUserShield,
} from "react-icons/fa";

import { FaCircleCheck } from "react-icons/fa6";
import ProfileMenu from "./ProfileMenu";

const ProfileSideBar = () => {
  const [Toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const data = [
    {
      id: "profile-information",
      Name: "Profile Information",
      NavLink: "/profile/",
      Icon: FaUser,
    },
    {
      id: "account",
      Name: "Account",
      NavLink: "/profile/account",
      Icon: FaUserCog,
    },
    {
      id: "account-status",
      Name: "Account Status",
      NavLink: "/profile/status",
      Icon: FaCircleCheck,
    },
    {
      id: "quick-actions",
      Name: "Quick Actions",
      NavLink: "/profile/quick-action",
      Icon: FaBolt,
    },
    {
      id: "account-verification",
      Name: "Account Verification",
      NavLink: "/profile/verification",
      Icon: FaUserShield,
    },
  ];

  return (
    <Box
      sx={{
        width: Toggle ? "360px" : "60px",
        minWidth: Toggle ? "360px" : "60px",
        maxWidth: Toggle ? "360px" : "60px",
        height: "100%",
        backgroundColor: "#000021",
        color: "white",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
        transition: "width 0.2s ease, min-width 0.2s ease",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: Toggle ? "space-between" : "center",
          height: "64px",
          px: Toggle ? 2 : 0,
          flexShrink: 0,
          mb: 1,
          boxSizing: "border-box",
        }}
      >
        {Toggle && (
          <Box
            onClick={() => navigate("/chat-room")}
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: "50%",
              flexShrink: 0,
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <PiArrowLeft size={22} />
          </Box>
        )}

        <Box
          onClick={() => setToggle(!Toggle)}
          sx={{
            width: "40px",
            height: "40px",
            minWidth: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            cursor: "pointer",
            borderRadius: "50%",
            transition: "background-color 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <FiSidebar size={22} />
        </Box>
      </Box>

      {/* Profile Menu */}
      <Box
        sx={{
          flexGrow: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          px: 1,
          py: 1,
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#374151",
            borderRadius: "10px",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          {data.map((elem) => (
            <ProfileMenu
              key={elem.id}
              data={elem}
              Toggle={Toggle}
            />
          ))}
        </Box>
      </Box>

      {/* Bottom */}
      <Box
        sx={{
          borderTop: "1px solid #1e1e1e",
          backgroundColor: "#000021",
          px: Toggle ? 2 : 0,
          py: 1.5,
          display: "flex",
          justifyContent: Toggle ? "space-between" : "center",
          alignItems: "center",
          flexShrink: 0,
          minHeight: "60px",
          boxSizing: "border-box",
        }}
      >
        {Toggle && (
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontSize: "13px",
            }}
          >
            Prashant Nair
          </Typography>
        )}

        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            cursor: "pointer",
            flexShrink: 0,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          <IoMdLogOut size={22} color="red" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSideBar;
