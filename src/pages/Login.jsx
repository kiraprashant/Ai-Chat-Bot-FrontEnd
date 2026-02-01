import React, { useState } from "react";

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




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setError("");

    console.log({ email, password });
    alert("Login Successful ✅");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",

        // 🌈 Background Gradient
        background: "linear-gradient(135deg, #000021, #02054a, #040875)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 3,
            backdropFilter: "blur(10px)",
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
                bgcolor: "#000021",
                mb: 1,
              }}
            >
               
            </Avatar>

            <Typography variant="h5" mb={2}>
              Sign In
            </Typography>
            

            {error && (
              <Typography color="error" fontSize={14} mb={1}>
                {error}
              </Typography>
            )}

            <Box component="form" onSubmit={handleSubmit} width="100%">
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

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
                Login
              </Button>
            </Box>

            <Typography mt={2} fontSize={14}>
              Don&apos;t have an account?{" "}
              <span
                style={{
                  color: "#02054a",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
               <Link to = "/register">Register</Link> 
              </span>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
