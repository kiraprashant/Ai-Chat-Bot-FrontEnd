
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  FaCalendar,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import { FaCoins } from "react-icons/fa";

const AccountStatus = () => {
  const { User, Loading, Error } = useSelector(
    (state) => state.UserData
  );

  console.log(User)

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatLastActive = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const accountStatus = User?.AccountStatus || "Active";

  const statusColor =
    accountStatus === "Active" ? "#22c1dc" : "#f59e0b";

    const cardStyle = {
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        padding: 2,
        backgroundColor: "#111827",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
      };

  const labelStyle = {
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "2px",
    fontWeight: 600,
    mb: 1.5,
  };

  const valueStyle = {
    color: "#dbeafe",
    fontWeight: 600,
  };

  if (Loading) {
    return <Box sx={{ p: 4, color: "#fff" }}>Loading...</Box>;
  }

  if (Error) {
    return <Box sx={{ p: 4, color: "#fff" }}>{Error}</Box>;
  }

  if (!User) {
    return <Box sx={{ p: 4, color: "#fff" }}>User not found.</Box>;
  }

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
        Account Status
      </Typography>

      <Box sx={{ flex: 1, overflowY: "auto", p: 4 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>

          {/* Account Status */}
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                ...cardStyle,
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Box>
                <Typography sx={labelStyle} variant="caption">
                  ACCOUNT STATUS
                </Typography>

                <Typography sx={valueStyle} variant="body1">
                  Your account is active and in good standing
                </Typography>
              </Box>

              <Box
                sx={{
                  border: `1px solid ${statusColor}66`,
                  backgroundColor: `${statusColor}18`,
                  borderRadius: 5,
                  px: 1.5,
                  py: 0.4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: statusColor,
                  }}
                />

                <Typography
                  sx={{ color: statusColor, fontSize: 12, fontWeight: 600 }}
                >
                  {accountStatus}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Account Created */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={cardStyle}>
              <Box>
                <Typography sx={labelStyle} variant="caption">
                  ACCOUNT CREATED
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <FaCalendar color="#94a3b8" size={17} />

                  <Typography sx={valueStyle} variant="body1">
                    {User.Created_At}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Last Active */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={cardStyle}>
              <Box>
                <Typography sx={labelStyle} variant="caption">
                  LAST ACTIVE
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <FaClock color="#94a3b8" size={17} />

                  <Typography sx={valueStyle} variant="body1">
                    {formatLastActive(User.lastActive)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Security */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={cardStyle}>
              <Box>
                <Typography sx={labelStyle} variant="caption">
                  SECURITY
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <FaShieldAlt color="#22d3ee" size={17} />

                  <Typography
                    sx={{ color: "#22d3ee", fontWeight: 600 }}
                    variant="body1"
                  >
                    Password Protected
                  </Typography>
                </Box>
              </Box>

              
            </Box>

            

            
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={cardStyle}>
              <Box>
                <Typography sx={labelStyle} variant="caption">
                    Token Usage
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <FaCoins color="#94a3b8" size={17} />

                  <Typography sx={valueStyle} variant="body1">
                   {User.totalTokens}
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

export default AccountStatus;
