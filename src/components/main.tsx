import { getPostMetadata, PostMetadata } from '@/utils/getPostMetadata';
import { Box } from '@mui/material';
import Post from '@/components/post';

export const Main = () => {
	const postMetaData = getPostMetadata('src/blogs');
	console.log(postMetaData);
	return (
		<Box>
			{postMetaData.map((post: PostMetadata) => {
				return (
					<Post
            key={post.slug}
            title={post.title}
            description={post.description}
            time={post.time}
            slug={post.slug}
          />
				);
			})}
		</Box>
	)
}

export default Main;