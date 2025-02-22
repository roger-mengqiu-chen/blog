import { getPostMetadata } from "@/utils/post_utils";
import { Box, Chip } from '@mui/material';
import Link from "next/link";
import styles from "./tag_cloud.module.css";


const TagCloud = () => {
  const blog_posts = getPostMetadata("src/data/blog");
  const project_posts = getPostMetadata("src/data/project");
  const all_posts = blog_posts.concat(project_posts);
  const tags = all_posts.map(post => post.tags).flat();
  const uniqueTags = Array.from(new Set(tags));
  return (
    <Box className={styles.tag_cloud}>
      {uniqueTags.map((tag, index) => {
        return (
          <Link key={index} href={`/tag/${tag}`}>
            <Chip key={index} label={tag} size="medium" clickable sx={{margin:"0.5rem", fontSize:"medium"}}/>
          </Link>
        );
      })}
    </Box>
  );
}

export default TagCloud;