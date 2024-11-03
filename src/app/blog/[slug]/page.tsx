import Markdown from "markdown-to-jsx";
import { Box } from "@mui/material";
import { getPostMetadata, getPostContent, BlogPageProps } from "@/utils/post_utils";
import React from "react";
import CustomImage from "@/components/home/custom_image";


export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/data/blogs");
  const blogs = posts.filter((post) => post.category === "blog");
  return blogs.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent("blogs", slug);

  return {
    title: `Roger Chen's Blog ${slug}`,
    description: post.data.description,
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const { slug } = params;
  const post = getPostContent("blogs", slug);

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

export default BlogPage;
