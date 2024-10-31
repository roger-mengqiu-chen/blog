import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import Box from '@mui/material/Box';


const Logo = () => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', ml: '0.5rem', mr: '0.5rem' }}>
      <Link href="/" passHref>
        <Avatar src="/icon.jpeg" alt="logo" />
      </Link>
    </Box>
	);
}

export default Logo;
