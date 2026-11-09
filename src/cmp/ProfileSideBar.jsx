
import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const ProfileMenu = ({ data, Toggle }) => {
  const location = useLocation();

  const isActive = location.pathname === data.NavLink;
  const Icon = data.Icon;

  return (
    <Link
      to={data.NavLink}
      style={{
        color: "white",
        textDecoration: "none",
        display: "block",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "42px",
          display: "flex",
          alignItems: "center",
          justifyContent: Toggle ? "flex-start" : "center",
          gap: Toggle ? 1.5 : 0,
          px: Toggle ? 1.5 : 0,
          // py: 1,
          boxSizing: "border-box",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: isActive
            ? "rgba(20,184,166,0.15)"
            : "transparent",
          color: isActive ? "#14b8a6" : "#cbd5e1",
          transition: "background-color 0.2s ease",
          "&:hover": {
            backgroundColor: isActive
              ? "rgba(20,184,166,0.2)"
              : "rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "24px",
            minWidth: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={18} />
        </Box>

        {Toggle && (
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: isActive ? 600 : 400,
              whiteSpace: "nowrap",
            }}
          >
            {data.Name}
          </Typography>
        )}
      </Box>
    </Link>
  );
};

export default ProfileMenu;
