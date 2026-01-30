import React, { useState } from "react";
import { Box } from "@mui/material";
import ListSideMessage from "./ListSideMessage";
import { IoMdLogOut } from "react-icons/io";
import { FiSidebar } from "react-icons/fi";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { BiSolidEdit } from "react-icons/bi";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

function Sidebar() {
  const [Toggle, setToggle] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [unique,setunique] = useState(uuidv4())

  const CreateNewId = () =>{
    setunique(uuidv4())
  }


  return (
    <Box
      sx={{
        width: Toggle ? "360px" : "60px",
        backgroundColor: "#000021",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "16px",
          p: 2,
          mb: 2,
        }}
      >
        {Toggle ? <PiCodesandboxLogoFill size={24} /> : null}
        <FiSidebar onClick={() => setToggle(!Toggle)} size={24} />
      </Box>
      <Box sx={{ px: 1 }}>
        <Box
          sx={{
            // backgroundColor:"rgba(255,255,255,0.3)",
            p: 1,
            fontSize: 18,
            pt: 1,
            borderRadius: 2,
            mb: 1,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            
          }}
          onClick={() => CreateNewId()}
        >
          <BiSolidEdit size={24} style={{ paddingRight: Toggle ? "8px" : 0 }} />
          {Toggle ? (
            <Typography variant="subtitle2"> New Chat </Typography>
          ) : null}{" "}
        </Box>
      </Box>
      {/* Top + Middle */}
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        {/* Header */}

        {/* Menu */}
        {Toggle ? (
          <Box sx={{ px: 1 }}>
            <Typography
              sx={{ p: 1, fontWeight: 500, opacity: 0.8 }}
              variant="body1"
            >
              My Chat {unique}
            </Typography>
          </Box>
        ) : null}

        {Toggle ? (
          <Box sx={{ p: 1 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <ListSideMessage
                key={i}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}

          </Box>
        ) : null}
      </Box>

      {/* Bottom */}
      <Box
        sx={{
          borderTop: "1px solid #1e1e1e",
          backgroundColor: "#000021",

          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {Toggle ? <Typography variant="body1">Prashant Nair</Typography> : null}
        <IoMdLogOut size={24} color="red" />
      </Box>
    </Box>
  );
}

export default Sidebar;
