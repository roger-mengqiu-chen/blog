import { getPostMetadata, PostMetadata } from '@/utils/getPostMetadata';
import { Box, Toolbar } from '@mui/material';
import Post from '@/components/home/post';
import styles from '@/components/home/home.module.css';

const Main = () => {
	const postMetaData = getPostMetadata('src/blogs');

	return (
		<Box>
			<Toolbar />
			{postMetaData.map((post: PostMetadata) => {
				return (
					<div className={styles.postcard} key={post.slug}>
						<Post
							key={post.slug}
							title={post.title}
							description={post.description}
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