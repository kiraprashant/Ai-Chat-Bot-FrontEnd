import { Box, Grid, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const Profilefield = ({ label, value, isEditable, multiline }) => {
  console.log("multiline", multiline);
  const [Inputable, setInputable] = useState(false);
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

        {Inputable ? (
          <TextField
            multiline={multiline}
            rows={multiline ? 3 : undefined}

            sx={{
              backgroundColor: "#0b1020",
              width: "100%",
              lineHeight:1.4,

              "& .MuiInputBase-input": {
                color: "#fff",
              },

              // Border radius
              "& .MuiOutlinedInput-root": {
                //   borderRadius: "8px !important ",
              },

              // Normal border
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.2)",
              },

              // Hover border
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },

              // Focused border
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
            }}
            fullWidth
            size="small"
            id="outlined-basic"
            variant="outlined"
            defaultValue={value}
          />
        ) : (
          <>
            <Typography sx={{ color: "#fff", fontWeight: 500 }} variant="body1">
              {value}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Profilefield;
