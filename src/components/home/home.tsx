import { getPostMetadata, PostMetadata } from '@/utils/post_utils';
import { Box } from '@mui/material';
import Post from '@/components/home/post';


interface Props {
	category: string;
}	

const Main: React.FC<Props> = ({ category }) => {
	const postMetaData = getPostMetadata(`src/data/${category}s`);
	
	return (
		<Box>
			{postMetaData.map((post: PostMetadata) => {
				return (
					<Post
						key={post.slug}
						title={post.title}
						description={post.description}
						category={post.category}
						tags={post.tags}
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