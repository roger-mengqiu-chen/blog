import { getPostMetadata, PostMetadata } from '@/utils/getPostMetadata';
import { Box, Toolbar } from '@mui/material';
import Post from '@/components/home/post';

const Main = () => {
	const postMetaData = getPostMetadata('src/blogs');

	return (
		<Box>
			<Toolbar />
			{postMetaData.map((post: PostMetadata) => {
				return (
					<Post
            key={post.slug}
            title={post.title}
            description={post.description}
            time={post.time}
						thumbnail={post.thumbnail}
            slug={post.slug}
          />
				);
			})}
		</Box>
	)
}

export default Main;