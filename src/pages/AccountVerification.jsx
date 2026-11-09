
import React from "react";
import { Box, Grid, Typography, Button, Chip } from "@mui/material";
import { useSelector } from "react-redux";

import {
  MdOutlineEmail,
  MdOutlinePhoneIphone,
  MdSecurity,
  MdVerified,
  MdWarningAmber,
  MdLockOutline,
} from "react-icons/md";

const AccountVerification = () => {
  const { User, Loading, Error } = useSelector(
    (state) => state.UserData
  );

  const cardStyle = {
    backgroundColor: "#111827",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    p: 3,
    minHeight: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
  };

  const labelStyle = {
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "2px",
    fontWeight: 600,
  };

  const valueStyle = {
    color: "#fff",
    fontWeight: 600,
  };

  const descriptionStyle = {
    color: "rgba(255,255,255,0.55)",
    fontSize: "13px",
    mt: 0.5,
  };

  const StatusBadge = ({ verified, enabled, label }) => {
    const success = verified ?? enabled;

    return (
      <Chip
        size="small"
        icon={
          success ? (
            <MdVerified />
          ) : (
            <MdWarningAmber />
          )
        }
        label={label}
        sx={{
            color: success ? "#14b8a6" : "#f59e0b",
            backgroundColor: success
              ? "rgba(20,184,166,0.12)"
              : "rgba(245,158,11,0.10)",
            border: `1px solid ${
              success
                ? "rgba(20,184,166,0.4)"
                : "rgba(245,158,11,0.4)"
            }`,
            fontWeight: 600,
            fontSize: "11px",
            height: "28px",
            px: 1,
            borderRadius: "20px",
          
            "& .MuiChip-label": {
              px: 1,
            },
          
            "& .MuiChip-icon": {
              color: "inherit",
              fontSize: "15px",
              ml: 1,
            },
          }}
      />
    );
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

  const emailVerified = User.EmailVerified === true;
  const phoneVerified = User.PhoneVerified === true;
  const twoFactorEnabled = User.TwoFactorEnabled === true;

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
      {/* Header */}
      <Typography
        variant="h5"
        sx={{
          p: 2,
          pl: 4,
          color: "#fff",
          borderBottom: "1px solid #1e1e1e",
          fontWeight: 600,
        }}
      >
        Account Verification
      </Typography>

      {/* Content */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 4 }}>
        <Grid container spacing={2.5}>

          {/* Email Verification */}
          <Grid size={{ xs: 12 }}>
            <Box sx={cardStyle}>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MdOutlineEmail color="#14b8a6" size={20} />
                  <Typography variant="caption" sx={labelStyle}>
                    EMAIL ADDRESS
                  </Typography>
                </Box>

                <Typography sx={{ ...valueStyle, mt: 2 }}>
                  {User.Email || "Not available"}
                </Typography>

                <Typography sx={descriptionStyle}>
                  Primary email used for security notifications and account recovery.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column", gap: 1 }}>
                <StatusBadge
                  verified={emailVerified}
                  label={emailVerified ? "Verified" : "Not Verified"}
                />

                {emailVerified ? (
                  <Chip
                    label="Primary"
                    size="small"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  />
                ) : (
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#14b8a6",
                      borderColor: "#0f766e",
                      textTransform: "none",
                    }}
                  >
                    Verify Email
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>

          {/* Phone Verification */}
          <Grid size={{ xs: 12 }}>
            <Box sx={cardStyle}>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MdOutlinePhoneIphone color="#94a3b8" size={20} />
                  <Typography variant="caption" sx={labelStyle}>
                    PHONE NUMBER
                  </Typography>
                </Box>

                <Typography sx={{ ...valueStyle, mt: 2 }}>
                  {User.Contact || "Not added"}
                </Typography>

                <Typography sx={descriptionStyle}>
                  Used for phone-based account verification and security alerts.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column", gap: 1 }}>
                <StatusBadge
                  verified={phoneVerified}
                  label={phoneVerified ? "Verified" : "Not Verified"}
                />

                {!phoneVerified && User.Contact && (
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#14b8a6",
                      borderColor: "#0f766e",
                      textTransform: "none",
                    }}
                  >
                    Verify
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>

          {/* Two Factor Authentication */}
          <Grid size={{ xs: 12 }}>
            <Box sx={cardStyle}>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MdSecurity color="#94a3b8" size={20} />
                  <Typography variant="caption" sx={labelStyle}>
                    TWO-FACTOR AUTHENTICATION
                  </Typography>
                </Box>

                <Typography sx={{ ...valueStyle, mt: 2 }}>
                  Authenticator App (TOTP)
                </Typography>

                <Typography sx={descriptionStyle}>
                  Add an extra layer of security by requiring a time-based authentication code.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column", gap: 1 }}>
                <StatusBadge
                  enabled={twoFactorEnabled}
                  label={twoFactorEnabled ? "Enabled" : "Not Enabled"}
                />

                <Button
                  variant="contained"
                  startIcon={<MdLockOutline />}
                  sx={{
                    backgroundColor: "#0f766e",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 2,
                    px: 2,
                    "&:hover": {
                      backgroundColor: "#115e59",
                    },
                  }}
                >
                  {twoFactorEnabled ? "Manage 2FA" : "Enable 2FA"}
                </Button>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default AccountVerification;
