import React from 'react'
import { Box } from "@mui/material";
import { Typography } from "@mui/material";



function ListSideMessage({active}) {
  return (
    <Box sx={{
        backgroundColor:"rgba(255,255,255,0.2)",
        backgroundColor:"rgba(107, 107, 107, 0.2)",
        backgroundColor: active
        ? "rgba(154, 154, 154, 0.2);"   // active bg
        : "transparent",     
        p:1,
        fontSize:18,
        pt:1,
        borderRadius:2,
        mb:2,
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.3)",
          },
        cursor:"pointer"

    }}><Typography 
    sx={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "260px", // IMPORTANT
      }}
    
    variant='body2'>Dashboard super lion goku king randi pokemon Dashboard super lion goku king randi pokemon Dashboard super lion goku king randi pokemon</Typography></Box>
  )
}

export default ListSideMessage