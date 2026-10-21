import React from "react";
import { Box, Typography } from "@mui/material";

const AccountSection = ({
  title,
  description,
  children,
  danger = false,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        padding: 1.4,
        backgroundColor: "#111827",
        position: "relative",
        boxShadow: "0 8px 24px rgba(0,0,0,.35)",
        mb: 4,
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          borderBottom: "1px solid #1e1e1e",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            color: danger
              ? "rgba(239, 68, 68, 0.6)"
              : "rgba(255,255,255,.6)",
            mb: 0.8,
            fontWeight: 500,
          }}
          variant="body2"
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            mb: 2,
            fontWeight: 500,
          }}
          variant="body1"
        >
          {description}
        </Typography>
      </Box>

      {children}
    </Box>
  );
};

export default AccountSection;