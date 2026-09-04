import React, { useState, useRef, useEffect } from "react";
import { OpenRouter } from "@openrouter/sdk";
import { Box, TextField, Button, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdLogOut } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {AddToChat} from "../Redux/Slices/ChatSlices"
import { useDispatch, useSelector } from "react-redux";






function ChatConversion() {
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const Dispatch = useDispatch()


  const { id } = useParams();

  const [Unquie, setUnquie] = useState();

  useEffect(() =>{
    if(id){
      setUnquie(id)
      setMessages([])
    }
    else{
      setUnquie(uuidv4())
      setMessages([])
    }
    
  },[id])




  const bottomRef = useRef(null);

  function makeShortTitle(text) {
    const stopWords = new Set([
      "is","are","the","a","an","why","how","what","when","where",
      "can","do","does","did","and","or","but","of","to","in","on",
      "for","with","about","than","so","very","much","which", "feel" ,"like"
    ]);
  
  
  
    const newTitle = text
      .toLowerCase()
      .match(/\b[a-z0-9]+\b/gi) // only words
      ?.filter(w => !stopWords.has(w))
      .slice(0, 4)
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join(" ") || "Chat";
  
      console.log(newTitle)
  
      return newTitle
  }

  // Auto scroll
  // useEffect(() => {
  //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  const handleSend = () => {
    alert("wait");
  };

  const sendMessage = async () => {
    console.log("User :", input);

    if (!input.trim()) return;

    // Add user message
    const userMsg = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMsg]);
    setinput("");
    setLoading(true);

    // Add empty AI message first
    const aiIndex = messages.length + 1;

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    messages.push({
      role: "user",
      content: input,
    });

    let data;

    if (messages.length > 1) {
      data = messages;
    } else {
      data = [
        {
          role: "user",
          content: input,
        },
      ];
    }

    console.log(data);



    // const stream = await openrouter.chat.send({
    //   model: "tngtech/deepseek-r1t2-chimera:free",
    //   messages: data,
    //   stream: true,
    // });

    // for await (const chunk of stream) {
    //   const content = chunk.choices[0]?.delta?.content;
    //   const text = content.replace(/[“”]/g, '"');
    //   if (text) {
    //     setMessages((prev) => {
    //       const updated = [...prev];

    //       updated[aiIndex] = {
    //         ...updated[aiIndex],
    //         content: updated[aiIndex].content + text,
    //       };
    //       return updated;
    //     });
    //   }
    // }

    makeShortTitle(input)

    if(messages.length <= 1){
      const ChatTitile = {
        ChatId:Unquie,
        Email:"Nair@GMAIL.COM",
        TiTle:makeShortTitle(input),
        Created_At:new Date()
      }
      Dispatch(AddToChat(ChatTitile))
    }


    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "#050412",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // ✅ No page scroll
      }}
    >
      <Typography
          sx={{
            borderBottom: "1px solid #1f2937",
            p: 2,
            color:"#fff"
          }}
          variant="body1"
        >
          Grok 4 {Unquie}
        </Typography>
      {/* Top Content */}
      <Box
        sx={{
          flex: 1, // ✅ Take remaining height
          // bgcolor: "#f5f5f5",
          overflowY: "auto", // ✅ Only this scrolls
        }}
      >

        {messages.map((msg, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              p: 2,
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                maxWidth: "70%",
                p: 1.5,
                borderRadius: 2,
                bgcolor: msg.role === "user" ? "#000021" : "#efefef",
                color: msg.role === "user" ? "white" : "black",
                boxShadow: 1,
              }}
            >
              {msg.content === "" ? (
                <div
                  style={{
                    display: "flex",
                    gap: 1,
                    fontSize: 40,
                    color: "#000021",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -6, 0] }} // up → down
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.6, // wave effect
                        ease: "easeInOut",
                      }}
                    >
                      .
                    </motion.span>
                  ))}
                </div>
              ) : (
                <Box sx={{ whiteSpace: "pre-wrap" }}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => (
                        <p style={{ margin: "8px 0" }}>{children}</p>
                      ),

                      ol: ({ children }) => (
                        <ol style={{ paddingLeft: 20 }}>{children}</ol>
                      ),

                      ul: ({ children }) => (
                        <ul style={{ paddingLeft: 20 }}>{children}</ul>
                      ),

                      li: ({ children }) => (
                        <li style={{ marginBottom: 4 }}>{children}</li>
                      ),
                    }}
                    style={{ padding: "12px", margin: "12px" }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </Box>
              )}
            </Box>
          </Box>
        ))}

        <div ref={bottomRef} />
      </Box>

      {/* Bottom Input */}
      <Box
        sx={{
          minHeight: "70px", // ✅ Fixed input height
          p: 2,
          // bgcolor: "#f5f5f5",
          position: "relative",
        }}
      >
        <TextField
            sx={{
              "& .MuiInputBase-root": {
                paddingRight: "80px", // space for button
                color:"#fff",
                backgroundColor: "#1F2937", // ✅ input background
                borderColor: "#6B7280",
                borderRadius: "12px",
                "&.Mui-focused fieldset": {
                  borderColor: "#6B7280",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9CA3AF", // label color (light grey)
              },

              "&.Mui-focused fieldset": {
                borderColor: "#6B7280",
              },
          
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff", // label when focused
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#374151", // default border
                },
                "&:hover fieldset": {
                  borderColor: "#374151", // default border
                },
                "&:hover fieldset": {
                  borderColor: "#374151", // default border
                },
              },
          
              borderColor:"red",
              color:"#fff"
            }}
          label="Chat to Kira Ai"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          fullWidth
          multiline
          minRows={1} // default height
          maxRows={4}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Stop new line
              sendMessage(); // Call send function
            }
          }}
        />
        <Button
          variant="contained"
          onClick={sendMessage}
          disabled={loading}
          sx={{
            padding: "8px",
            paddingTop: "12px",
            paddingBottom: "12px",
            borderRadius: 4,
            position: "absolute",
            right: 24,
            bottom: 36,
            backgroundColor: "#000021",
          }}
        >
          {loading ? <LuSend size={18} /> : <LuSend size={18} />}
        </Button>
      </Box>
    </Box>
  );
}

export default ChatConversion;
