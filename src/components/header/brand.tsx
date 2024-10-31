import { Box } from "@mui/material"
import styles from '@/components/header/brand.module.css'
import Logo from "@/components/header/logo";

const Brand = () => {
	return (
		<Box className={styles.brand_box}>
			<Logo />
			<p className={styles.brand_typography}>
				Roger Chen
			</p>
		</Box>
	)
}

export default Brand;