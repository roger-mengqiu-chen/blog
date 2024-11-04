import { BlogPageProps, getPostContent, getPostMetadata, PostMetadata } from '@/utils/post_utils';
import { Box, Toolbar } from '@mui/material';
import Post from '@/components/home/post';
import Markdown from 'markdown-to-jsx';
import CustomImage from '@/components/home/custom_image';


interface Props {
	category: string;
}	

export const Main: React.FC<Props> = ({ category }) => {
	const postMetaData = getPostMetadata(`src/data/${category}`);
	
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

interface PostMainProps {
  category: string;
  slug: string;
}

export const PostMain: React.FC<PostMainProps> = ({ category, slug }) => {
  const post = getPostContent(`${category}`, slug);
  console.log(post);
  return (
    <Box component="article">
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
