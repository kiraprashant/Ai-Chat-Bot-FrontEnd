import { Box, Grid, Typography, TextField } from "@mui/material";
import React, { useState,useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";

const Profilefield = ({ 
  id,
  label,
  value,
  isEditable,
  multiline,
  onChange, }) => {

  
  const [Inputable, setInputable] = useState(false);
  const [inputValue, setInputValue] = useState(value ?? "");

  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);

  console.log("Field ID:", id);

  const handleClick = () => {
    console.log("clicked");
    setInputable(!Inputable);
  };


  return (
    <Box
      sx={{
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        padding: 1.4,
        backgroundColor: "#111827",
        height: multiline ? "120px" : "65px",
        // display: "flex",
        // alignItems: "center",
        position: "relative",
        boxShadow: "0 8px 24px rgba(0,0,0,.35)",
      }}
    >
      {isEditable === true ? (
        <Box
          onClick={handleClick}
          sx={{
            position: "absolute",
            top: "2px",
            right: "2px",
            p: "5px",
            borderRadius: "6px",
            cursor: "pointer",

            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.10)",
            },
          }}
        >
          <FaRegEdit size={14} color="rgba(255,255,255,0.5)" />
        </Box>
      ) : null}
      <Box sx={{ width: "100%", minWidth: 0 }}>
        <Typography
          sx={{ color: "rgba(255,255,255,.6)", mb: 0.8, fontWeight: 500 }}
          variant="body2"
        >
          {label}
        </Typography>

        {Inputable && isEditable ? (
  <TextField
    multiline={multiline}
    rows={multiline ? 3 : undefined}
    fullWidth
    size="small"
    value={inputValue}
    onChange={(e) => {
      const newValue = e.target.value;
    
      setInputValue(newValue);
      onChange(id, newValue);
    }}
    sx={{
      backgroundColor: "#0b1020",
      "& .MuiInputBase-input": {
        color: "#fff",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255,255,255,0.2)",
      },
    }}
  />
) : (
  <Typography
    sx={{ color: "#fff", fontWeight: 500 }}
    variant="body1"
  >
    {inputValue || ""}
  </Typography>
)}
      </Box>
    </Box>
  );
};

export default Profilefield;
