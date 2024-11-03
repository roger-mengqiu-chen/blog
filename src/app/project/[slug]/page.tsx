import Markdown from "markdown-to-jsx";
import { Box, Toolbar } from "@mui/material";
import { getPostMetadata } from "@/utils/post_utils";
import React from "react";
import * as fs from 'fs';
import matter from "gray-matter";


const getPostContent = (slug: string) => {
  const file = `src/blogs/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/blogs");
  const blogs = posts.filter((post) => post.category === "project");
  return blogs.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent(slug);

  return {
    title: `Roger Chen's Blog ${slug}`,
    description: post.data.description,
  }
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: React.FC<BlogPageProps> = ({ params }) => {
  const { slug } = params;
  const post = getPostContent(slug);
  console.log(post);
  return (
    <Box component="article">
      <Toolbar />
      <Markdown>{post.content}</Markdown>
    </Box>
  );
}

export default ProjectPage;
