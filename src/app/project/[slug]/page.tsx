import { getPostMetadata, getPostContent, BlogPageProps, sortPostsByTime } from "@/utils/post_utils";
import React from "react";
import { PostMain } from "@/components/home/home";


export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/data/project");
  sortPostsByTime(posts);
  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const posts = getPostMetadata("src/data/project");
  const postMeta = posts.find((p: { slug: string; }) => p.slug === slug);

  return {
    title: `Roger Chen's Project | ${slug}`,
    description: postMeta?.description ?? '',
  };
}

const ProjectPage: React.FC<BlogPageProps> = async ({ params }) => {
  const { slug } = await params as { slug: string };

  return (
    <PostMain slug={slug} category="project"/>
  )
}

export default ProjectPage;
