import Markdown from "markdown-to-jsx";
import { Box, Toolbar } from "@mui/material";
import { getPostMetadata, getPostContent, BlogPageProps } from "@/utils/post_utils";
import React from "react";


export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/data/projects");
  const blogs = posts.filter((post) => post.category === "project");
  return blogs.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent("projects", slug);

  return {
    title: `Roger Chen's Blog ${slug}`,
    description: post.data.description,
  }
}

const ProjectPage: React.FC<BlogPageProps> = ({ params }) => {
  const { slug } = params;
  const post = getPostContent("projects", slug);
  console.log(post);
  return (
    <Box component="article">
      <Toolbar />
      <Markdown>{post.content}</Markdown>
    </Box>
  );
}

export default ProjectPage;
