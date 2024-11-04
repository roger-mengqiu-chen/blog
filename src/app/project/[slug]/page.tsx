import { getPostMetadata, getPostContent, BlogPageProps } from "@/utils/post_utils";
import React from "react";
import { PostMain } from "@/components/home/home";


export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/data/project");
  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent("project", slug);

  return {
    title: `Roger Chen's Blog ${slug}`,
    description: post.data.description,
  }
}

const ProjectPage: React.FC<BlogPageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <PostMain slug={slug} category="project"/>
  )
}

export default ProjectPage;
