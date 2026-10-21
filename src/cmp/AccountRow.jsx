import React from "react";
import { Box, Typography } from "@mui/material";

const AccountRow = ({
  title,
  description,
  action,
  danger = false,
  isLast = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...(isLast
          ? {}
          : {
              mb: 4,
              pb: 2,
              borderBottom: "1px solid #1e1e1e",
            }),
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: danger ? "rgba(239, 68, 68, 0.8)" : "#fff",
            mb: 0.8,
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,.6)",
            mb: 0.3,
            fontWeight: 500,
          }}
        >
          {description}
        </Typography>
      </Box>

      {action}
    </Box>
  );
};

export default AccountRow;