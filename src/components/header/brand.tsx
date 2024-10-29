import { Box, Typography } from "@mui/material"
import styles from '@/components/header/brand.module.css'

const Brand = () => {
	return (
		<Box className={styles.brand_box}>
			<Typography className={styles.brand_typography}>
				CR Blog
			</Typography>
		</Box>
	)
}

export default Brand;