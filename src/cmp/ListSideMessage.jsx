import React from 'react'
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link ,useNavigate} from 'react-router-dom';




function ListSideMessage({data,activeIndex,setActiveIndex}) {
  console.log(data)

  const navigate = useNavigate();

  const isActive = activeIndex === data.ChatId;

  const handleClick = () => {
    setActiveIndex(data.ChatId);       // highlight
    navigate(`/chat-room/${data.ChatId}`);  // change URL
  };


  return (
    
    <Box 
    onClick={()=> handleClick()}
    sx={{
        // backgroundColor:"rgba(255,255,255,0.2)",
        // backgroundColor:"rgba(107, 107, 107, 0.2)",   
        p:1,
        fontSize:18,
        backgroundColor: isActive
        ? "#111827"
        : "transparent",
        pt:1,
        borderRadius:2,
        mb:2,
        "&:hover": {
            backgroundColor: "#1f2937",
          },
        cursor:"pointer"

    }}><Typography 
    sx={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "260px", // IMPORTANT
      }}
    
    variant='body2'></Typography>{data.TiTle}</Box>
   
  )
}

export default ListSideMessage