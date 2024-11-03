import { getPostMetadata, PostMetadata } from '@/utils/post_utils';
import { Box } from '@mui/material';
import Post from '@/components/home/post';
import styles from '@/components/home/home.module.css';

interface Props {
	category: string;
}	

const Main: React.FC<Props> = ({ category }) => {
	const postMetaData = getPostMetadata('src/blogs');
	const blogs = postMetaData.filter((post: PostMetadata) => post.category === category);
	return (
		<Box>
			{blogs.map((post: PostMetadata) => {
				return (
					<div className={styles.postcard} key={post.slug}>
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
					</div>
				);
			})}
		</Box>
	)
}

export default Main;