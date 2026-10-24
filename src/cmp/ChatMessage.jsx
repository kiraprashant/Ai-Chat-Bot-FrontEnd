import { memo } from "react";
import { Box, TextField, Button, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdLogOut } from "react-icons/io";

const ChatMessage = memo(function ChatMessage({ msg, selectedModel }) {
  console.log("msg :", msg);
  const isUser = msg.role === "user";

  return (
    <Box
      //   key={i}
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        gap: 1.5,
        px: { xs: 1, md: 3 },
        py: 2,
        animation: "fadeIn 0.3s ease",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* AI avatar */}
      {!isUser && (
        <Avatar
          sx={{
            width: 36,
            height: 36,
            mt: 0.5,
            fontSize: 16,
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            boxShadow: "0 0 16px #6366f133",
          }}
        >
          {/* <AutoAwesomeRoundedIcon fontSize="small" /> */}
        </Avatar>
      )}

      <Box
        sx={{
          maxWidth: { xs: "90%", md: "78%" },
          minWidth: 0,
        }}
      >
        {/* Sender and model badge */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1,
            justifyContent: isUser ? "flex-end" : "flex-start",
          }}
        >
          {isUser ? (
            <>
              <Typography
                variant="caption"
                sx={{ color: "#94a3b8", fontWeight: 600 }}
              >
                You
              </Typography>
              <Avatar
                sx={{
                  width: 25,
                  height: 25,
                  fontSize: 12,
                  bgcolor: "#273449",
                }}
              >
                {/* <PersonRoundedIcon fontSize="small" /> */}
              </Avatar>
            </>
          ) : (
            <>
              <Typography
                variant="caption"
                sx={{
                  color: "#e2e8f0",
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                {msg.model || selectedModel}
              </Typography>

              <Box
                sx={{
                  px: 1,
                  py: 0.25,
                  borderRadius: 5,
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#c4b5fd",
                  bgcolor: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.25)",
                }}
              >
                AI
              </Box>
            </>
          )}
        </Box>

        {/* Message card */}
        <Box
          sx={{
            px: { xs: 1.5, md: 2.5 },
            py: 1.5,
            borderRadius: isUser ? "20px 5px 20px 20px" : "5px 20px 20px 20px",
            color: "#f1f5f9",
            background: isUser
              ? "linear-gradient(135deg, #312e81, #1e3a8a)"
              : "rgba(255,255,255,0.045)",
            border: isUser
              ? "1px solid rgba(129,140,248,0.25)"
              : "1px solid rgba(148,163,184,0.13)",
            boxShadow: isUser
              ? "0 5px 20px rgba(30,58,138,0.12)"
              : "0 4px 20px rgba(0,0,0,0.08)",
            overflowWrap: "anywhere",
          }}
        >
          {msg.content === "" ? (
            <Box sx={{ display: "flex", gap: 0.6, py: 0.5 }}>
              {[0, 1, 2].map((dot) => (
                <Box
                  component={motion.span}
                  key={dot}
                  animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: dot * 0.18,
                  }}
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: "#a78bfa",
                  }}
                />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                fontSize: 14.5,
                lineHeight: 1.8,
                "& p": { my: 1 },
                "& p:first-of-type": { mt: 0 },
                "& p:last-child": { mb: 0 },
                "& pre": {
                  overflowX: "auto",
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: "#080d16",
                  border: "1px solid #263244",
                },
                "& code": {
                  fontSize: "0.9em",
                  overflowWrap: "anywhere",
                },
                "& a": { color: "#a5b4fc" },
                "& blockquote": {
                  ml: 0,
                  pl: 2,
                  borderLeft: "3px solid #818cf8",
                  color: "#cbd5e1",
                },
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Paragraphs
                  p: ({ children }) => (
                    <Typography
                      component="p"
                      sx={{
                        fontSize: "0.95rem",
                        lineHeight: 1.85,
                        color: "#e2e8f0",
                        mb: 2,
                        "&:last-child": { mb: 0 },
                      }}
                    >
                      {children}
                    </Typography>
                  ),

                  // Headings
                  h1: ({ children }) => (
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mt: 3,
                        mb: 2,
                        color: "#f8fafc",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {children}
                    </Typography>
                  ),

                  h2: ({ children }) => (
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 750,
                        mt: 3,
                        mb: 1.5,
                        color: "#f1f5f9",
                        borderBottom: "1px solid rgba(148,163,184,0.18)",
                        pb: 1,
                      }}
                    >
                      {children}
                    </Typography>
                  ),

                  h3: ({ children }) => (
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mt: 2.5,
                        mb: 1,
                        color: "#c4b5fd",
                      }}
                    >
                      {children}
                    </Typography>
                  ),

                  h4: ({ children }) => (
                    <Typography
                      component="h4"
                      sx={{ fontWeight: 700, mt: 2, mb: 1, color: "#e2e8f0" }}
                    >
                      {children}
                    </Typography>
                  ),

                  // Bold text
                  strong: ({ children }) => (
                    <Box
                      component="strong"
                      sx={{ color: "#fff", fontWeight: 750 }}
                    >
                      {children}
                    </Box>
                  ),

                  // Italic text
                  em: ({ children }) => (
                    <Box component="em" sx={{ color: "#cbd5e1" }}>
                      {children}
                    </Box>
                  ),

                  // Unordered lists
                  ul: ({ children }) => (
                    <Box
                      component="ul"
                      sx={{
                        pl: 3,
                        my: 1.5,
                        color: "#cbd5e1",
                        "& li": { mb: 1, pl: 0.5 },
                        "& li::marker": { color: "#818cf8" },
                      }}
                    >
                      {children}
                    </Box>
                  ),

                  // Ordered lists
                  ol: ({ children }) => (
                    <Box
                      component="ol"
                      sx={{
                        pl: 3,
                        my: 1.5,
                        color: "#cbd5e1",
                        "& li": { mb: 1, pl: 0.5 },
                        "& li::marker": {
                          color: "#a5b4fc",
                          fontWeight: 700,
                        },
                      }}
                    >
                      {children}
                    </Box>
                  ),

                  li: ({ children }) => (
                    <Box component="li" sx={{ lineHeight: 1.8 }}>
                      {children}
                    </Box>
                  ),

                  // Inline code
                  code: ({ children, className }) => {
                    const isBlock = Boolean(className?.startsWith("language-"));

                    return isBlock ? (
                      <Box
                        component="code"
                        className={className}
                        sx={{
                          fontFamily:
                            "'Fira Code', 'SFMono-Regular', Consolas, monospace",
                          fontSize: "0.85rem",
                          color: "#c4b5fd",
                        }}
                      >
                        {children}
                      </Box>
                    ) : (
                      <Box
                        component="code"
                        sx={{
                          display: "inline",
                          px: 0.7,
                          py: 0.25,
                          mx: 0.2,
                          borderRadius: 1,
                          bgcolor: "rgba(139,92,246,0.13)",
                          border: "1px solid rgba(139,92,246,0.2)",
                          color: "#c4b5fd",
                          fontFamily:
                            "'Fira Code', 'SFMono-Regular', Consolas, monospace",
                          fontSize: "0.85em",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {children}
                      </Box>
                    );
                  },

                  // Code blocks
                  pre: ({ children }) => (
                    <Box
                      component="pre"
                      sx={{
                        my: 2,
                        p: 2,
                        overflowX: "auto",
                        borderRadius: 2.5,
                        bgcolor: "#080d16",
                        border: "1px solid #263244",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
                        "& code": {
                          display: "block",
                          p: 0,
                          m: 0,
                          bgcolor: "transparent",
                          border: 0,
                          color: "#e2e8f0",
                          fontSize: "0.85rem",
                          lineHeight: 1.8,
                          whiteSpace: "pre",
                          overflowWrap: "normal",
                        },
                      }}
                    >
                      {children}
                    </Box>
                  ),

                  // Links
                  a: ({ children, href }) => (
                    <Box
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#a5b4fc",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(165,180,252,0.35)",
                        transition: "color 0.2s",
                        "&:hover": {
                          color: "#c4b5fd",
                          borderBottomColor: "#c4b5fd",
                        },
                      }}
                    >
                      {children}
                    </Box>
                  ),

                  // Blockquotes
                  blockquote: ({ children }) => (
                    <Box
                      component="blockquote"
                      sx={{
                        m: 0,
                        my: 2,
                        pl: 2,
                        py: 0.5,
                        borderLeft: "3px solid #818cf8",
                        bgcolor: "rgba(129,140,248,0.06)",
                        borderRadius: "0 8px 8px 0",
                        color: "#cbd5e1",
                        "& p": { mb: 0 },
                      }}
                    >
                      {children}
                    </Box>
                  ),

                  // Horizontal divider
                  hr: () => (
                    <Box
                      component="hr"
                      sx={{
                        my: 3,
                        border: 0,
                        borderTop: "1px solid rgba(148,163,184,0.2)",
                      }}
                    />
                  ),

                  // Tables
                  table: ({ children }) => (
                    <Box sx={{ overflowX: "auto", my: 2, borderRadius: 2 }}>
                      <Box
                        component="table"
                        sx={{
                          width: "100%",
                          borderCollapse: "collapse",
                          fontSize: "0.9rem",
                          color: "#e2e8f0",
                          "& th": {
                            bgcolor: "#1e293b",
                            color: "#f8fafc",
                            fontWeight: 700,
                            textAlign: "left",
                          },
                          "& th, & td": {
                            border: "1px solid #334155",
                            p: 1.5,
                            verticalAlign: "top",
                          },
                          "& tbody tr:nth-of-type(even)": {
                            bgcolor: "rgba(255,255,255,0.025)",
                          },
                        }}
                      >
                        {children}
                      </Box>
                    </Box>
                  ),

                  th: ({ children }) => <Box component="th">{children}</Box>,
                  td: ({ children }) => <Box component="td">{children}</Box>,

                  // Images
                  img: ({ src, alt }) => (
                    <Box
                      component="img"
                      src={src}
                      alt={alt || ""}
                      loading="lazy"
                      sx={{
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: 420,
                        objectFit: "contain",
                        borderRadius: 2,
                        my: 2,
                      }}
                    />
                  ),
                }}
              >
                {msg.content}
              </ReactMarkdown>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
});

export default ChatMessage;
