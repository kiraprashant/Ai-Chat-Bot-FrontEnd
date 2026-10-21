import React from "react";
import { Button } from "@mui/material";

const AccountButton = ({ children, danger = false, ClickEvent }) => {
  return (
    <Button
      onClick={()=> ClickEvent()}
      variant="outlined"
      sx={{
        color: danger
          ? "#fca5a5"
          : "rgba(255,255,255,.6)",

        borderColor: danger
          ? "rgba(239, 68, 68, 0.8)"
          : "rgba(255,255,255,.6)",

        backgroundColor: danger
          ? "rgba(127, 29, 29, 0.25)"
          : "transparent",

        "&:hover": {
          color: danger
            ? "rgba(239, 68, 68, 1)"
            : "rgba(255,255,255,.8)",

          borderColor: danger
            ? "rgba(239, 68, 68, 1)"
            : "rgba(255,255,255,.8)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default AccountButton;