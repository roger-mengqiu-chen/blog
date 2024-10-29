
import ResponsiveAppBar from "@/components/header/header";
import Box from '@mui/material/Box';
import Main from '@/components/home';


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
