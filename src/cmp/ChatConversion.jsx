import React, { useState, useRef, useEffect } from "react";
import { OpenRouter } from "@openrouter/sdk";
import { Box, TextField, Button, Typography, Avatar } from "@mui/material";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdLogOut } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AddToChat } from "../Redux/Slices/ChatSlices";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FormControl, Select, MenuItem } from "@mui/material";
import ChatMessage from "./ChatMessage";

function ChatConversion() {
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const Dispatch = useDispatch();
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [ModelRepiled, setModelRepiled] = useState("");


  const { id } = useParams();

  const [Unquie, setUnquie] = useState();

  useEffect(() => {
    if (id) {
      setUnquie(id);
      setMessages([]);
    } else {
      setUnquie(uuidv4());
      setMessages([]);
    }
  }, [id]);

  useEffect(() => {

    const fetchDataMessage = async() =>{

      console.log("working")
      const response = await axios.get(
        `http://localhost:8080/api/Message/Allmessage/${id}`
      );
      
      console.log("all meesages" , response.data.data);
      setMessages(response.data.data)
    }

    fetchDataMessage();

  },[id])


  useEffect(() => {
    const getModels = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/ChatModel/List-Model"
        );

        const modelList = response.data.Models;

        console.log(response.data.Models);

        setModels(modelList);

        // Select the first available model by default
        if (modelList.length > 0) {
          setSelectedModel(modelList[0].name);
        }
      } catch (error) {
        console.error(
          "Failed to fetch models:",
          error.response?.data || error.message
        );
      }
    };

    getModels();
  }, []);

  const bottomRef = useRef(null);

  function makeShortTitle(text) {
    const stopWords = new Set([
      "is",
      "are",
      "the",
      "a",
      "an",
      "why",
      "how",
      "what",
      "when",
      "where",
      "can",
      "do",
      "does",
      "did",
      "and",
      "or",
      "but",
      "of",
      "to",
      "in",
      "on",
      "for",
      "with",
      "about",
      "than",
      "so",
      "very",
      "much",
      "which",
      "feel",
      "like",
    ]);

    const newTitle =
      text
        .toLowerCase()
        .match(/\b[a-z0-9]+\b/gi) // only words
        ?.filter((w) => !stopWords.has(w))
        .slice(0, 4)
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ") || "Chat";

    console.log(newTitle);

    return newTitle;
  }

  // Auto scroll
  // useEffect(() => {
  //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  const handleSend = () => {
    alert("wait");
  };

  
const sendMessage = async () => {
  const question = input.trim();

  if (!question || loading) return;

  const userMsg = {
    role: "user",
    content: question,
  };

  const history = [...messages, userMsg];
  const recentMessages = history.slice(-5);
  const aiIndex = history.length;

  try {
    const response = await axios.post(
      "http://localhost:8080/api/Message",
      {
        ChatId: Unquie,
        MessageId: crypto.randomUUID(),
        Role: "user",
        Name:"Kira",
        Content:question ,
      }
    );
  
    console.log("Chat message saved:", response.data);
  } catch (error) {
    console.error(
      "Failed to save chat message:",
      error.response?.data || error.message
    );
  }

  setMessages([
    ...history,
    { role: "assistant", content: "", model: selectedModel },
  ]);

  setinput("");
  setLoading(true);





  try {
    const response = await fetch(
      "http://localhost:8080/api/ChatModel/chat-bot",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: recentMessages,
          model: selectedModel,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    if (!response.body) {
      throw new Error("Streaming is not supported by this response.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";
    let aiContent = "";
    let streamFinished = false;

    while (!streamFinished) {
      const { value, done } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const events = buffer.split("\n\n");
      buffer = events.pop() || "";

      for (const event of events) {
        const dataLine = event
          .split("\n")
          .find((line) => line.startsWith("data:"));

        if (!dataLine) continue;

        const data = JSON.parse(dataLine.slice(5).trim());

        if (data.type === "token") {
          aiContent += data.content;

          setMessages((prev) =>
            prev.map((msg, index) =>
              index === aiIndex
                ? {
                    ...msg,
                    content: aiContent,
                    model: selectedModel,
                  }
                : msg
            )
          );
        }

        if (data.type === "done") {
          setModelRepiled(data.AIModel || selectedModel);
          streamFinished = true;

          console.log("Stream completed:", data);

          try {
            const response = await axios.post(
              "http://localhost:8080/api/Message",
              {
                ChatId: Unquie,
                MessageId: crypto.randomUUID(),
                Role: "assistant",
                Content: aiContent,
                Name:"Ai"
              }
            );
          
            console.log("Chat message saved:", response.data);
          } catch (error) {
            console.error(
              "Failed to save chat message:",
              error.response?.data || error.message
            );
          }


        }

        if (data.type === "error") {
          throw new Error(data.message || "AI streaming failed");
        }
      }
    }

    if (!aiContent.trim()) {
      throw new Error("AI response is empty");
    }

    // Create a title for the first message
    if (messages.length === 0) {
      const title = await makeShortTitle(question);

      const chatTitle = {
        ChatId: Unquie,
        Email: "Nair@GMAIL.COM",
        Title: title,
        Created_At: new Date(),
      };

      Dispatch(AddToChat(chatTitle));




      try {
        const response = await axios.post(
          "http://localhost:8080/api/ChatHistory/",
          chatTitle
        );
      
        console.log("Chat history saved:", response.data);
      } catch (error) {
        console.error(
          "Failed to save chat history:",
          error.response?.data || error.message
        );
      }


    }
  } catch (error) {
    console.error("Chat API error:", error);

 

    setMessages((prev) =>
      prev.map((msg, index) =>
        index === aiIndex
          ? {
              ...msg,
              content: "Sorry, something went wrong. Please try again.",
            }
          : msg
      )
    );
  } finally {
    setLoading(false);
  }



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
      {/* <Typography
          sx={{
            borderBottom: "1px solid #1f2937",
            p: 2,
            color:"#fff"
          }}
          variant="body1"
        >
          Grok 4 {Unquie}
        </Typography> */}

      <FormControl fullWidth>
        <Select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          variant="standard"
          disableUnderline
          sx={{
            borderBottom: "1px solid #1f2937",
            p: 2,
            color: "#fff",
            "& .MuiSvgIcon-root": {
              color: "#fff",
            },
          }}
        >
          {models.map((model) => (
            <MenuItem key={model.name} value={model.name}>
              {model.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Top Content */}
      <Box
        sx={{
          flex: 1, // ✅ Take remaining height
          // bgcolor: "#f5f5f5",
          overflowY: "auto", // ✅ Only this scrolls
        }}
      >
   

{messages.map((msg,i) => (
  <ChatMessage
    key={i}
    msg={msg}
    selectedModel={selectedModel}
  />
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
              color: "#fff",
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

            borderColor: "red",
            color: "#fff",
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


