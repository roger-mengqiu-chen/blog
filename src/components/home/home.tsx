import {  getAllPosts, getPostContent, getPostMetadata, PostMetadata, sortPostsByTime } from '@/utils/post_utils';
import { Box } from '@mui/material';
import { Post, PostExcerpt } from '@/components/home/post';
import Markdown from 'markdown-to-jsx';
import { BlockQuote, CustomImage, CustomLink } from '@/components/home/custom_components';


interface Props {
	category: string;
}	

export const Main: React.FC<Props> = ({ category }) => {
	const postMetaData = getPostMetadata(`src/data/${category}`);
	sortPostsByTime(postMetaData);
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

export const TagMain: React.FC<Props> = ({ category }) => {
	const all_posts = getAllPosts();
	const posts = all_posts.filter(post => post.tags.includes(category));
	sortPostsByTime(posts);
	return (
		<Box className="fly">
			{posts.map((post: PostMetadata) => {
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
						a: {
							component: CustomLink,
						},
						blockquote: {
							component: BlockQuote,
						}
					},
				}}>{post.content}</Markdown>
    </Box>
  );
}
