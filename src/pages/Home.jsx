import React, { useState, useRef, useEffect } from "react";
import { OpenRouter } from "@openrouter/sdk";
import { Box, TextField, Button, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdLogOut } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";


function Home() {
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);


  const bottomRef = useRef(null);

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

    const openrouter = new OpenRouter({
      apiKey:
        "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",
    });

    const stream = await openrouter.chat.send({
      model: "tngtech/deepseek-r1t2-chimera:free",
      messages: data,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      const text = content.replace(/[“”]/g, '"');
      if (text) {
        setMessages((prev) => {
          const updated = [...prev];

          updated[aiIndex] = {
            ...updated[aiIndex],
            content: updated[aiIndex].content + text,
          };
          return updated;
        });
      }
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // ✅ No page scroll
      }}
    >
      <Typography
          sx={{
            borderBottom: "1px solid #d6d6d6",
            p: 2,
          }}
          variant="body1"
        >
          Grok 4
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
              },
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
              handleSend(); // Call send function
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

export default Home;
