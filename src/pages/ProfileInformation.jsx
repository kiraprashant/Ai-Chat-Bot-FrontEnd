
import { Box, Grid, Typography, Avatar,Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Profilefield from "../cmp/Profilefield";
import axiosInstance from "../cmp/Auth/Intance";
import React, { useState,useEffect } from "react";
import { UpdateUser } from "../Redux/Slices/UserSlices"; // adjust path
import { GetProfileBYID } from "../Redux/Slices/UserSlices";


const ProfileInformation = () => {
  const dispatch = useDispatch();

  // Get profile data from Redux
  const { User, Loading, Error } = useSelector((state) => state.UserData);
  const Dispatch = useDispatch()

  const [formData, setFormData] = useState({});

 const currentData = formData ?? {
  FullName: User?.FullName ?? "",
  Address: User?.Address ?? "",
  Contact: User?.Contact ?? "",
  DOB: User?.DOB
    ? new Date(User.DOB).toISOString().split("T")[0]
    : "",
};

// useEffect(() => {
//   dispatch(GetProfileBYID());
// }, [dispatch]);

const handleFieldChange = (id, value) => {
  setFormData((prev) => {
    const updated = {
      ...prev,
      [id]: value,
    };

    console.log("Updated formData:", updated);
    return updated;
  });
};



  const HandleSave = async () => {
    try {
      const response = await axiosInstance.put("/ChatRoom/profile", {
        FullName: formData.FullName ?? User.FullName,
        Address: formData.Address ?? User.Address,
        Contact: formData.Contact ?? User.Contact,
        DOB: formData.DOB ?? User.DOB,
      });

      Dispatch(UpdateUser(response.data.user));

      console.log("formData.FullName :", formData.FullName )
   
  
      console.log("Profile updated:", response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  const ProfileFieldsData = [
    {
      id: "FullName",
      label: "Full Name",
      md: 6,
      Editable: true,
      multiline: false,
    },
    {
      id: "Email",
      label: "Email",
      md: 6,
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
      id: "Contact",
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

  if (Loading) {
    return (
      <Box sx={{ p: 4, bgcolor: "#050412", color: "#fff" }}>
        Loading profile...
      </Box>
    );
  }

  if (Error) {
    return <Box sx={{ p: 4, bgcolor: "#050412", color: "#fff" }}>{Error}</Box>;
  }

  if (!User) {
    return (
      <Box sx={{ p: 4, bgcolor: "#050412", color: "#fff" }}>
        Profile data not found.
      </Box>
    );
  }

  const initials = (User.FullName || "U")
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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
        sx={{
          p: 2,
          pl: 4,
          color: "#fff",
          borderBottom: "1px solid #1e1e1e",
        }}
        variant="h5"
      >
        Profile Information
      </Typography>

      <Box sx={{ flex: 1, overflowY: "auto", p: 4 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2} columnSpacing={2}>

              {ProfileFieldsData.map((field) => (
                <Grid key={field.id} size={{ xs: 12, md: field.md }}>
                  <Profilefield
                     id={field.id}
                    isEditable={field.Editable}
                    label={field.label}
                    value={
                      field.id === "DOB" && User.DOB
                        ? new Date(User.DOB).toLocaleDateString()
                        : User[field.id] ?? ""
                    }
                    multiline={field.multiline}
                    onChange={handleFieldChange}
                  />
                  
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mt: 3,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#444",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>

              <Button
                onClick={()=> HandleSave()}
                variant="contained"
                sx={{
                  backgroundColor: "#0f766e",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#115e59",
                  },
                }}
              >
                Save Changes
              </Button>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    backgroundColor: "#1a1730",
                    border: "2px solid rgba(255,255,255,0.12)",
                    boxShadow:
                      "0 0 0 4px rgba(139,92,246,0.08), 0 8px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  {initials}
                </Avatar>

                <Box
                  sx={{
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
