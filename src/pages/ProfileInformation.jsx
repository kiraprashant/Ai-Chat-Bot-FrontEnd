import React, { useState } from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import { hover } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";
import Profilefield from "../cmp/Profilefield";

const ProfileInformation = () => {
  const [Users, setUser] = useState({
    FullName: "kira",
    UserName: "LordKira@gmail.com",
    Email: "LordKira@gmiail.com",
    Address: "this my address if you have problem come and get me ",
    Phone: "35332453",
    DOB: "12 jan 1999",
  });
  const ProfileFieldsData = [
    {
      id: "FullName",
      label: "Full Name",
      md: 6,
      Editable: true,
      multiline: false,
    },
    {
      id: "UserName",
      label: "Username",
      md: 6,
      Editable: true,
      multiline: false,

    },
    {
      id: "Email",
      label: "Email",
      md: 12,
      Editable: false,
      multiline: false,

    },
    {
      id: "Address",
      label: "Address",
      md: 12,
      Editable: true,
      multiline: true,
  

    },
    {
      id: "Phone",
      label: "Phone",
      md: 6,
      Editable: true,
      multiline: false,

    },
    {
      id: "DOB",
      label: "Date of Birth",
      md: 6,
      Editable: true,
      multiline: false,

    },
  ];

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
          Profile Information
        </Typography>
      <Box
        sx={{
          flex: 1, // ✅ Take remaining height
          //   bgcolor: "#f5f5f5",
          overflowY: "auto", // ✅ Only this scrolls
          p: 4,
        }}
      >

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box>
              <Grid container spacing={2} columnSpacing={2}>
                {ProfileFieldsData.map((field) => (
                  <Grid key={field.id} size={{ xs: 12, md: field.md }}>
                    <Profilefield
                      isEditable={field.Editable}
                      label={field.label}
                      value={Users[field.id]}
                      multiline={field.multiline}
                      // value = "lol"
                    />
                  </Grid>
                ))}

                {/* <Profilefield /> */}
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                height: "240px",
                borderRadius: "12px",
                backgroundColor: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Box>
                <Avatar
                  sx={{
                    width: "120px",
                    height: "120px",
                    mb: 2,

                    backgroundColor: "#1a1730",

                    border: "2px solid rgba(255, 255, 255, 0.12)",

                    boxShadow: `
      0 0 0 4px rgba(139, 92, 246, 0.08),
      0 8px 20px rgba(0, 0, 0, 0.4)
    `,
                  }}
                >
                  LK
                </Avatar>
                <Box
                  sx={{
                    // border:"1px solid #fff",
                    backgroundColor: "#0f766e",
                    p: 1,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    "&:hover": {
                      backgroundColor: "#115e59",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography sx={{ color: "white" }} variant="body2">
                    Edit Avatar
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileInformation;
