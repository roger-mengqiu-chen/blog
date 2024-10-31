import { Paper, Box, Typography, Link } from "@mui/material";
import { PostMetadata } from "@/utils/getPostMetadata";
import React from "react";
import styles from '@/components/home/post.module.css';
import Image from 'next/image';

export const Post: React.FC<PostMetadata> = (post: PostMetadata) => {
	const defaultThumbnail = "/images/default-thumbnail.jpg";	
	const category = post.category;
	
	return (
		<Paper elevation={3} className={styles.card}>
			<Link href={`/${category}/${post.slug}`} className={styles.post_link} underline="none">
				<Box className={styles.card_content}>
					<Box className={styles.thumbnail_container}>
						<Image src={post.thumbnail ? post.thumbnail : defaultThumbnail} 
						  alt={post.title} 
						  width={0} 
						  height={0} 
						  className={ styles.thumbnail } 
						  priority={ true } />
					</Box>
					<Box>
						<p className={styles.title}>{post.title}</p>
						<p>{post.time}</p>
						<Box className={styles.tags}>
							{post.tags.map((tag: string) => {
								return (
									<p key={tag} className={styles.tag}>{tag}</p>
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
