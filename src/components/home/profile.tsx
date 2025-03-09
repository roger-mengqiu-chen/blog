import { Box, Paper } from "@mui/material";
import { GitHub, LinkedIn } from '@mui/icons-material';
import Link from "next/link";
import Image from 'next/image';
import styles from './profile.module.css';

export const Profile = () => {
  return (
    <Box className={styles.profile_container}>
      <Box className={styles.profile_text}>
        <h1>I'm A Software Developer</h1>
        <p>With experience in full stack development on multiple platforms, I provide simple and effective solutions to existing problems</p>
        <Box className={styles.profile_social}>
          <Link href="https://github.com/roger-mengqiu-chen" className={styles.profile_link}>
            <GitHub className={styles.footer_icon}/>
          </Link>
          <Link href="https://www.linkedin.com/in/rogermchen/" className={styles.profile_link}>
            <LinkedIn className={styles.footer_icon}/>
          </Link>
			</Box>
      </Box>
      <Box >
        <Image src="images/profile.jpg" alt="profile" className={styles.profile_image} width={200} height={200}/>
          
      </Box>
      
    </Box>
  )
};
