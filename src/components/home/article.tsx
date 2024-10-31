import { Box } from "@mui/material"
import styles from '@/components/home/article.module.css'

const Article = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
	return (
		<Box className={styles.article}>
			{ children }
		</Box>
	);
}

export default Article;