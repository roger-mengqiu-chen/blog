import Markdown from "markdown-to-jsx";
import { Box } from "@mui/material";
import { getPostMetadata, getPostContent, BlogPageProps } from "@/utils/post_utils";
import React from "react";
import CustomImage from "@/components/home/custom_image";
import { PostMain } from "@/components/home/home";


export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/data/blog");
  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent("blog", slug);

  return {
    title: `Roger Chen's Blog ${slug}`,
    description: post.data.description,
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <PostMain slug={slug} category="blog"/>
  )
}

export default BlogPage;
