import React, { useState } from "react";

// MUI Components
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import { BrowserRouter, Routes, Route, Navigate,Link } from "react-router-dom";


// MUI Icon


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    console.log("Register Data:", {
      name,
      email,
      password,
    });

    alert("Registration Successful ✅");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",

        // 🌈 Dark Gradient Background
        background: "linear-gradient(135deg, #000021, #02054a, #040875)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow:"auto"
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Avatar Icon */}
            <Avatar
              sx={{
                bgcolor: "#000021",
                mb: 1,
              }}
            >
              
            </Avatar>

            {/* Title */}
            <Typography variant="h5" mb={2}>
              Create Account
            </Typography>

            {/* Error */}
            {error && (
              <Typography color="error" fontSize={14} mb={1}>
                {error}
              </Typography>
            )}

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} width="100%">
              {/* Name */}
              <TextField
                fullWidth
                margin="normal"
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Email */}
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password */}
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Confirm Password */}
              <TextField
                fullWidth
                margin="normal"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#000021",
                  "&:hover": {
                    bgcolor: "#02054a",
                  },
                }}
              >
                Register
              </Button>
            </Box>

            {/* Login Link */}
            <Typography mt={2} fontSize={14}>
              Already have an account?{" "}
              <span
                style={{
                  color: "#02054a",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
               <Link to = "/login">Login</Link>
              </span>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Register;
