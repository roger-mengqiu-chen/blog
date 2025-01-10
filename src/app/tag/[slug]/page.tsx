import { getPostMetadata, sortPostsByTime } from "@/utils/post_utils";

export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/data/blog");
  sortPostsByTime(posts);
  return posts.map((post) => ({ slug: post.slug }));
}
