import { Paper, Box, Typography, Link } from "@mui/material";
import { PostMetadata } from "@/utils/getPostMetadata";
import React from "react";
import styles from '@/components/home/post.module.css';
import Image from 'next/image';

export const Post: React.FC<PostMetadata> = (post: PostMetadata) => {
	const defaultThumbnail = "/images/default-thumbnail.jpg";	
	
	return (
		<Paper elevation={3} className={styles.card}>
			<Link href={`/blog/${post.slug}`} className={styles.post_link}>
				<Box className={styles.card_content}>
					<Box className={styles.thumbnail_container}>
						<Image src={defaultThumbnail} alt={post.title} width={0} height={0} className={ styles.thumbnail }/>
					</Box>
					<Box>
						<Typography className={styles.title}>{post.title}</Typography>
						<Typography variant="body2">{post.time}</Typography>
						<Box className={styles.tags}>
							{post.tags.map((tag: string) => {
								return (
									<Typography key={tag} className={styles.tag}>{tag}</Typography>
								)
							})}
							</Box>
						<Typography variant="body1">{post.description}</Typography>
					</Box>
				</Box>
			</Link>
		</Paper>
	)
}

export default Post;
