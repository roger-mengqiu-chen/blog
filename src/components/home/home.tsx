import {  getPostContent, getPostMetadata, PostMetadata } from '@/utils/post_utils';
import { Box } from '@mui/material';
import { Post, PostExcerpt } from '@/components/home/post';
import Markdown from 'markdown-to-jsx';
import CustomImage from '@/components/home/custom_image';


interface Props {
	category: string;
}	

export const Main: React.FC<Props> = ({ category }) => {
	const postMetaData = getPostMetadata(`src/data/${category}`);
	
	return (
		<Box className="fly">
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

interface PostMainProps {
  category: string;
  slug: string;
}

export const PostMain: React.FC<PostMainProps> = ({ category, slug }) => {
  const post = getPostContent(category, slug);
	const metaData = post.data;
	
  return (
    <Box component="article" className="fly">
			<PostExcerpt
        title={metaData.title}
        description={metaData.description}
        category={metaData.category}
        tags={metaData.tags}
        time={metaData.time}
        thumbnail={metaData.thumbnail}
        slug={metaData.slug}
      />
      <Markdown
        options={{
					overrides: {
						img: {
							component: CustomImage,
						},
					},
				}}>{post.content}</Markdown>
    </Box>
  );
}
