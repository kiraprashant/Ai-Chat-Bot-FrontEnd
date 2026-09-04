import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function ProfileMenu({ data }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === data.NavLink;

  const handleClick = () => {
    navigate(data.NavLink);
  };

  const Icon = data.Icon;

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 1.5,
        mb: 1,
        borderRadius: 2,
        cursor: "pointer",
        backgroundColor: isActive ? "#111827" : "transparent",
        borderLeft:isActive?"3px solid #a855f7" : "3px solid transpatent",
        transition:"all 0.2s ease", 
        boxShadow:isActive? "0 0 8px rgba(168,85,247,0.55)" : "none",

        "&:hover": {
          backgroundColor: "#1f2937",
        },
      }}
    >
      {Icon && <Icon size={20} />}

      <Typography
        variant="body2"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {data.Name}
      </Typography>
    </Box>
  );
}

export default ProfileMenu;