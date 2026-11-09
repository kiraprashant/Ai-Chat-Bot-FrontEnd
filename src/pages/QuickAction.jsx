
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";

import {
  FaChartLine,
  FaDownload,
  FaCode,
  FaFileAlt,
  FaLaptop,
  FaServer,
  FaHistory,
  FaQuestionCircle,
  FaBookOpen,
  FaDiscord,
  FaTerminal,
  FaDesktop,
} from "react-icons/fa";

const colors = {
  background: "#050412",
  card: "#111827",
  border: "rgba(255,255,255,0.08)",
  primary: "#ffffff",
  secondary: "rgba(255,255,255,0.55)",
  teal: "#14b8a6",
  tealDark: "#0f766e",
  danger: "#f87171",
};

const cardStyle = {
  backgroundColor: colors.card,
  border: `1px solid ${colors.border}`,
  borderRadius: "10px",
  p: { xs: 1.5, sm: 2 },
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  boxShadow: "0 5px 16px rgba(0,0,0,0.25)",
  overflow: "hidden",
};

const headingStyle = {
  color: colors.primary,
  fontSize: "15px",
  fontWeight: 600,
};

const textStyle = {
  color: colors.secondary,
  fontSize: "12px",
};

const buttonStyle = {
  textTransform: "none",
  fontSize: "12px",
  fontWeight: 500,
  borderRadius: "7px",
  px: 1.5,
  py: 0.65,
  minHeight: "32px",
  whiteSpace: "nowrap",
};

const QuickActions = () => {
  const handleExport = (format) => {
    console.log(`Exporting chat history as ${format}`);
  };

  const handleRevokeSession = (device) => {
    console.log(`Revoking session: ${device}`);
  };

  const handleTerminateSessions = () => {
    console.log("Terminating all other sessions");
  };

  const handleAction = (action) => {
    console.log(`${action} clicked`);
  };

  const StatCard = ({ icon: Icon, label, value }) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Box
        sx={{
          ...cardStyle,
          minHeight: "88px",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            minWidth: 36,
            borderRadius: "8px",
            bgcolor: "rgba(20,184,166,0.12)",
            color: colors.teal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={16} />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ ...textStyle, mb: 0.3 }}>
            {label}
          </Typography>
          <Typography
            sx={{
              color: colors.primary,
              fontSize: "16px",
              fontWeight: 600,
              overflowWrap: "anywhere",
            }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );

  const SectionTitle = ({ icon: Icon, title, subtitle }) => (
    <Box sx={{ mb: 1.5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Icon size={15} color={colors.teal} />
        <Typography sx={headingStyle}>{title}</Typography>
      </Box>
      {subtitle && (
        <Typography sx={{ ...textStyle, mt: 0.4 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        bgcolor: colors.background,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box
        sx={{
         
          py: 1.5,
          pl: 4,
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            color: colors.primary,
            fontSize: "19px",
            fontWeight: 600,
          }}
        >
          Quick Actions
        </Typography>

        <Typography sx={{ ...textStyle, mt: 0.3 }}>
          Manage your account and application activities
        </Typography>
      </Box>

      <Divider sx={{ borderColor: colors.border }} />

      {/* Scrollable Content */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          minWidth: 0,
          overflowY: "auto",
          overflowX: "hidden",
        //   px: { xs: 2, sm: 2.5 },
          p: 4,

        }}
      >
<Grid
  container
  rowSpacing={3}
  columnSpacing={2}
  sx={{
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
  }}
>
          {/* Message Statistics */}
          <Grid size={{ xs: 12 }}>
            <Box sx={cardStyle}>
              <SectionTitle
                icon={FaChartLine}
                title="Message Statistics"
                subtitle="Your overall chat activity"
              />

              <Grid container spacing={1.5}>
                <StatCard
                  icon={FaHistory}
                  label="Total Conversations"
                  value="1,248"
                />

                <StatCard
                  icon={FaFileAlt}
                  label="Total Messages Sent"
                  value="48,620"
                />

                <StatCard
                  icon={FaCode}
                  label="Most Used Model"
                  value="Llama 3.3 70B"
                />
              </Grid>
            </Box>
          </Grid>

          {/* Export Chat History */}
          <Grid size={{ xs: 12 }}>
            <Box sx={cardStyle}>
              <SectionTitle
                icon={FaDownload}
                title="Export Chat History"
                subtitle="Download your conversations"
              />

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<FaFileAlt size={12} />}
                  onClick={() => handleExport("JSON")}
                  sx={{
                    ...buttonStyle,
                    bgcolor: colors.tealDark,
                    color: "#fff",
                    "&:hover": {
                      bgcolor: "#115e59",
                    },
                  }}
                >
                  Export JSON
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<FaCode size={12} />}
                  onClick={() => handleExport("Markdown")}
                  sx={{
                    ...buttonStyle,
                    color: colors.teal,
                    borderColor: colors.tealDark,
                    "&:hover": {
                      bgcolor: "rgba(20,184,166,0.08)",
                      borderColor: colors.teal,
                    },
                  }}
                >
                  Export Markdown
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Active Sessions */}
          <Grid size={{ xs: 12 }}>
            <Box sx={cardStyle}>
              <SectionTitle
                icon={FaLaptop}
                title="Manage Active Sessions"
                subtitle="Manage devices currently logged into your account"
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {/* Current Session */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 1,
                    p: 1.25,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "8px",
                    minWidth: 0,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, minWidth: 0 }}>
                    <FaLaptop size={17} color={colors.teal} />

                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ color: colors.primary, fontSize: "13px", fontWeight: 600 }}>
                        MacBook Pro
                      </Typography>
                      <Typography sx={textStyle}>
                        Current session · Chrome · Active now
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label="Current"
                    size="small"
                    sx={{
                      height: 23,
                      fontSize: "10px",
                      color: colors.teal,
                      bgcolor: "rgba(20,184,166,0.12)",
                    }}
                  />
                </Box>

                {/* Other Session */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 1,
                    p: 1.25,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "8px",
                    minWidth: 0,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, minWidth: 0 }}>
                    <FaServer size={17} color="#94a3b8" />

                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ color: colors.primary, fontSize: "13px", fontWeight: 600 }}>
                        Linux RTX 4090
                      </Typography>
                      <Typography sx={textStyle}>
                        Firefox · Last active 2 hours ago
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    size="small"
                    onClick={() => handleRevokeSession("Linux RTX 4090")}
                    sx={{
                      ...buttonStyle,
                      color: colors.danger,
                      minWidth: "auto",
                      "&:hover": {
                        bgcolor: "rgba(248,113,113,0.08)",
                      },
                    }}
                  >
                    Revoke
                  </Button>
                </Box>
              </Box>

              <Button
                onClick={handleTerminateSessions}
                sx={{
                  ...buttonStyle,
                  mt: 1.5,
                  color: colors.danger,
                  border: "1px solid rgba(248,113,113,0.3)",
                  "&:hover": {
                    bgcolor: "rgba(248,113,113,0.08)",
                  },
                }}
              >
                Terminate All Other Sessions
              </Button>
            </Box>
          </Grid>

          {/* Help & Support */}
          <Grid size={{ xs: 12 }}>
            <Box sx={cardStyle}>
              <SectionTitle
                icon={FaQuestionCircle}
                title="Help & Support"
                subtitle="Find help and useful resources"
              />

              <Grid container spacing={1.5}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Button
                    fullWidth
                    startIcon={<FaBookOpen size={13} />}
                    onClick={() => handleAction("Documentation")}
                    sx={{
                      ...buttonStyle,
                      justifyContent: "flex-start",
                      color: colors.primary,
                      border: `1px solid ${colors.border}`,
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.04)",
                      },
                    }}
                  >
                    Documentation
                  </Button>
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Button
                    fullWidth
                    startIcon={<FaDiscord size={13} />}
                    onClick={() => handleAction("Community Discord")}
                    sx={{
                      ...buttonStyle,
                      justifyContent: "flex-start",
                      color: colors.primary,
                      border: `1px solid ${colors.border}`,
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.04)",
                      },
                    }}
                  >
                    Community Discord
                  </Button>
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Button
                    fullWidth
                    startIcon={<FaTerminal size={13} />}
                    onClick={() => handleAction("Diagnostic Logs")}
                    sx={{
                      ...buttonStyle,
                      justifyContent: "flex-start",
                      color: colors.primary,
                      border: `1px solid ${colors.border}`,
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.04)",
                      },
                    }}
                  >
                    Diagnostic Logs
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default QuickActions;
