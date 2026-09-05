import React from "react";
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
      <Typography
        sx={{ p: 2, pl: 4, color: "#fff", borderBottom: "1px solid #1e1e1e" }}
        variant="h5"
      >
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
        <Box
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: 1.4,
            backgroundColor: "#111827",
            // height: "65px",
            // display: "flex",
            // alignItems: "center",
            position: "relative",
            boxShadow: "0 8px 24px rgba(0,0,0,.35)",
            mb:4
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #1e1e1e",
              mb: 2,
            }}
          >
            <Typography
              sx={{ color: "rgba(255,255,255,.6)", mb: 0.8, fontWeight: 500 }}
              variant="body2"
            >
              LOGIN AND PASSWORD
            </Typography>
            <Typography
              sx={{ color: "#fff", mb: 2, fontWeight: 500 }}
              variant="body1"
            >
              Manage your local node credentials and authentication keys.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{ color: "#fff", mb: 0.8, fontWeight: 500 }}
                variant="body1"
              >
                Password
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,.6)", mb: 0.3, fontWeight: 500 }}
                variant="body2"
              >
                last changed Password 3months ago
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  // backgroundColor: '#4caf50',
                  color: "rgba(255,255,255,.6)",
                  borderColor: "rgba(255,255,255,.6)",
                  "&:hover": {
                    color: "rgba(255,255,255,.8)", // Darken on hover
                    borderColor: "rgba(255,255,255,.8)",
                  },
                }}
                variant="outlined"
              >
                Change Password
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: 1.4,
            backgroundColor: "#111827",
            // height: "65px",
            // display: "flex",
            // alignItems: "center",
            position: "relative",
            boxShadow: "0 8px 24px rgba(0,0,0,.35)",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            mb:4

          }}
        >
          <Box
            sx={{
            
            }}
          >
            <Typography
              sx={{ color: "rgba(255,255,255,.6)", mb: 0.8, fontWeight: 500 }}
              variant="body2"
            >
              EMAIL ADDRESS
            </Typography>
            <Typography
              sx={{ color: "#fff", mb: 2, fontWeight: 500 }}
              variant="body1"
            >
              Lordprashant@gmail.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >

            <Box>
              <Button
                sx={{
                  // backgroundColor: '#4caf50',
                  color: "rgba(255,255,255,.6)",
                  borderColor: "rgba(255,255,255,.6)",
                  "&:hover": {
                    color: "rgba(255,255,255,.8)", // Darken on hover
                    borderColor: "rgba(255,255,255,.8)",
                  },
                }}
                variant="outlined"
              >
                Change Email
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: 1.4,
            backgroundColor: "#111827",
            // height: "65px",
            // display: "flex",
            // alignItems: "center",
            position: "relative",
            boxShadow: "0 8px 24px rgba(0,0,0,.35)",
            mb:4
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #1e1e1e",
              mb: 2,
            }}
          >
            <Typography
              sx={{ color: "rgba(239, 68, 68, 0.6)", mb: 0.8, fontWeight: 500 }}
              variant="body2"
            >
              DANGER ZONE
            </Typography>
            <Typography
              sx={{ color: "#fff", mb: 2, fontWeight: 500 }}
              variant="body1"
            >
              irreversible and destructive account action
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb:4,
              pb:2,
              borderBottom: "1px solid #1e1e1e",
              
              
            }}
          >
            <Box sx={{
                
            }}>
              <Typography
                sx={{ color: "#fff", mb: 0.8, fontWeight: 500 }}
                variant="body1"
              >
                Sign Out
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,.6)", mb: 0.3, fontWeight: 500 }}
                variant="body2"
              >
               end the session local node
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  // backgroundColor: '#4caf50',
                  color: "rgba(255,255,255,.6)",
                  borderColor: "rgba(255,255,255,.6)",
                  "&:hover": {
                    color: "rgba(255,255,255,.8)", // Darken on hover
                    borderColor: "rgba(255,255,255,.8)",
                  },
                }}
                variant="outlined"
              >
                Log Out
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{ color: "rgba(239, 68, 68, 0.8)", mb: 0.8, fontWeight: 500 }}
                variant="body1"
              >
                Delete Account
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,.6)", mb: 0.3, fontWeight: 500 }}
                variant="body2"
              >
               This will Permentatly Delete The Account
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  // backgroundColor: '#4caf50',
                  color: "#fca5a5",
                  borderColor: "rgba(239, 68, 68, 0.8)",
                  backgroundColor: "rgba(127, 29, 29, 0.25)",
                  border: "1px solid rgba(248, 113, 113, 0.2)",
                  "&:hover": {
                    color: "rgba(239, 68, 68, 0.8)", // Darken on hover
                    borderColor: "rgba(239, 68, 68, 1)",
                  },
                }}
                variant="outlined"
              >
                Delete Account 
              </Button>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default AccountSetting;
