import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';


const Logo = () => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', mr: '0.5rem', p: 0 }}>
      <Link href="/" passHref>
        <Image src="/icon.jpeg" alt="logo" width={50} height={50} style={{borderRadius: '50%'}}/>
      </Link>
    </Box>
	);
}

export default Logo;
