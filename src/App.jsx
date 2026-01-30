import { useState } from 'react'
import Home from './pages/Home'
import Sidebar from './cmp/Sidebar'
import { Box } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Box
      sx={{
        display: "flex",
        height: "100vh", // Full screen height
        width:"100vw"
      }}
    >
        <Sidebar />
        <Home />
    </Box>
    </>
  )
}

export default App
