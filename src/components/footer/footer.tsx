import { Box } from "@mui/material";
import { GitHub, LinkedIn } from '@mui/icons-material';
import Link from "next/link";
import styles from '@/components/footer/footer.module.css';

const Footer = () => {
	return (
		<Box className={styles.footer}>
			<Box className={styles.quote}>
				Once you stop learning, you start dying
			</Box>
			<Box>
				<Link href="https://github.com/roger-mengqiu-chen" className={styles.link}>
					<GitHub className={styles.footer_icon}/>
				</Link>
				<Link href="https://www.linkedin.com/in/rogermchen/" className={styles.link}>
					<LinkedIn className={styles.footer_icon}/>
				</Link>
			</Box>
		</Box>
	)
}

export default Footer;