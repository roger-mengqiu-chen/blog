import {getPostMetadata, BlogPageProps, sortPostsByTime} from "@/utils/post_utils";
import React from "react";
import {PostMain} from "@/components/home/home";


export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/data/project");
  sortPostsByTime(posts);
  return posts.map((post) => ({slug: post.slug}));
}

const ProjectPage: React.FC<BlogPageProps> = async ({params}) => {
  const {slug} = await params as { slug: string };

  return (
    <PostMain slug={slug} category="project"/>
  )
}

export default ProjectPage;
