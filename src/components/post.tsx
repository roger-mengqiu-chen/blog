import { Box, Typography, Link } from "@mui/material";
import { PostMetadata } from "@/utils/getPostMetadata";
import React from "react";

export const Post: React.FC<PostMetadata> = (post: PostMetadata) =>{
	
	return (
		<Link href={`/blog/${post.slug}`}>
			<Box>
				<Typography variant="h4">{post.title}</Typography>
				<Typography variant="body1">{post.description}</Typography>
				<Typography variant="body2">{post.time}</Typography>
			</Box>
		</Link>
	)
}

export default Post;
