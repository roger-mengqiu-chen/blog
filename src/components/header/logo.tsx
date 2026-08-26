import Link from 'next/link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from '@/components/header/logo.module.css';
import {normalizePublicAsset} from "@/utils/path_utils";


const Logo = () => {
  const logoSrc = normalizePublicAsset("/icon.jpeg"); // Path to your logo image
  return (
    <Box className={styles.logoBox}>
      <Link href="/" passHref>
        <Image src={logoSrc} alt="logo" width={50} height={50} style={{borderRadius: '50%'}}/>
      </Link>
    </Box>
  );
}

export default Logo;
