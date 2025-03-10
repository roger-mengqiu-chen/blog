import { Paper, Box, Stack, Link, Chip } from "@mui/material";
import { PostMetadata } from "@/utils/post_utils";
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
					<Box className={styles.card_brief}>
						<Box className={styles.title}>{post.title}</Box>
						<Box className={styles.time}>{post.time}</Box>
						<Box className={styles.description}>{post.description}</Box>
						<Stack className={styles.tags} direction="row">
							{post.tags.map((tag: string) => {
								return (
									<Chip key={tag} className={styles.tag} label={tag} />
								)
							})}
						</Stack>
					</Box>
				</Box>
			</Link>
		</Paper>
	)
}

export const PostExcerpt = (postMetaData: PostMetadata) => {
	return (
		<Box>
			<Box className={styles.post_title}>
				{postMetaData.title}
			</Box>
			<Box className={styles.post_time}>
				{postMetaData.time}
			</Box>
			<Box className={styles.post_tags}>
				{postMetaData.tags?.map((tag: string) => {
					return (
						<Chip key={tag} className={styles.tag} label={tag} />
					)
				})}
			</Box>
		</Box>
	)
}
