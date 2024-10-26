"use client";

import ResponsiveAppBar from "@/components/header";
import Box from '@mui/material/Box';
import Main from '@/components/main';


export default function Home() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <ResponsiveAppBar />
        <Main />
      </Box>    
    </>
  );
}
