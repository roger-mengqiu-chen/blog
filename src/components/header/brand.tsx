import { Box, Typography } from "@mui/material"
import styles from '@/components/header/brand.module.css'
import Logo from "@/components/header/logo";

const Brand = () => {
	return (
		<Box className={styles.brand_box}>
			<Logo />
			<Typography className={styles.brand_typography}>
				Roger Chen
			</Typography>
		</Box>
	)
}

export default Brand;