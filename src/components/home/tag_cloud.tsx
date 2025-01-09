import { getPostMetadata } from "@/utils/post_utils";
import { Box, Chip } from '@mui/material';
import styles from '@/components/home/tag_cloud.module.css';


const TagCloud = () => {
  const blog_posts = getPostMetadata("src/data/blog");
  const project_posts = getPostMetadata("src/data/project");
  const all_posts = blog_posts.concat(project_posts);
  const tags = all_posts.map(post => post.tags).flat();
  const uniqueTags = Array.from(new Set(tags));
  return (
    <Box>
      {uniqueTags.map((tag, index) => {
        return (
          <Chip key={index} className={styles.tag} label={tag} size="medium"/>
        );
      })}
    </Box>
  );
}

export default TagCloud;