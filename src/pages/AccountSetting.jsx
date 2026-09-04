import React from 'react'
import { Box, TextField, Button, Typography } from "@mui/material";


const AccountSetting = () => {
  return (
       <Box
    sx={{
      width: "100%",
      bgcolor: "#050412",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}
  >
        <Typography sx={{ p:2, pl:4, color: "#fff", borderBottom: "1px solid #1e1e1e", }} variant="h5">
        Account Setting
      </Typography>
    <Box
      sx={{
        flex: 1, // ✅ Take remaining height
        //   bgcolor: "#f5f5f5",
        overflowY: "auto", // ✅ Only this scrolls
        p: 4,
      }}
    >

    </Box>
    </Box>    
  )
}

export default AccountSetting