import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography, Box, Container } from '@mui/material';
import PinterestGrid from './PinterestGrid';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh">
      <Box
        py={4}
        sx={{
          maxWidth: '90%',
          width: '90%',
          margin: 'auto',
        }}
      >
        <Box display="flex" justifyContent="center">
          {/*
          <Box>
            <Box sx={{ fontSize: '5em' }} display="flex" justifyContent="center">
              ✌️
            </Box>
            <Typography variant="h3" component="h1">
              Pinverse
            </Typography>
          </Box>
          */}
        </Box>
        <Box my={4}>
          <PinterestGrid />
        </Box>
      </Box>
    </Box>
  )
}

export default App
