import { TagMain } from "@/components/home/home";
import { getAllPosts } from "@/utils/post_utils";

export const generateStaticParams = async () => {
  const posts = getAllPosts();
  const tags = posts.map(post => post.tags).flat();
  const uniqueTags = Array.from(new Set(tags));
  console.log(`Generating static params for tag pages: ${uniqueTags}`);
  return uniqueTags.map(tag => ({ slug: tag }));
}

interface TagPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params }: TagPageProps) => {
  const { slug } = params;
  console.log(`Generating metadata for tag page ${slug}`);
  return {
    title: `Roger Chen's Site | ${slug}`
  }
}

const TagPage: React.FC<TagPageProps> = ({ params }) => {
  console.log(params);
  const { slug } = params;
  console.log(`Rendering tag page for ${slug}`);
  return (
    <TagMain category={slug} />
  );
};


export default TagPage;