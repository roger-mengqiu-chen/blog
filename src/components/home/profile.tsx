import { Box } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import styles from "./profile.module.css";

export const Profile = () => {
  return (
    <Box className={styles.profile_container}>
      <Box className={styles.profile_text}>
        
        <Box>
          <Image
            src="images/profile.jpg"
            alt="profile"
            className={styles.profile_image}
            width={200}
            height={200}
          />
        </Box>
        
      </Box>
      <Box className={styles.profile_description}>
      <h1 className={styles.profile_title}>I&apos;m A Software Developer</h1>
        <Box className={styles.profile_brief}>
          With experience in full stack development on multiple platforms, I
          provide simple and efficient solutions to existing problems
        </Box>
        <Box className={styles.profile_social}>
          <Link
            href="https://github.com/roger-mengqiu-chen"
            className={styles.profile_link}
          >
            <GitHub className={styles.footer_icon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rogermchen/"
            className={styles.profile_link}
          >
            <LinkedIn className={styles.footer_icon} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
