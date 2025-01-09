import * as fs from 'fs';
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  description: string;
	category: string;
	tags: string[];
  time: string;
  thumbnail: string;
  slug: string;
}

export interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const getPostMetadata = (fpName: string) => {
	const folder = fpName + '/';
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter(file => file.endsWith('.md'));

	const posts : PostMetadata[] = markdownPosts.map((filename: string) => {
		const slug = filename.replace('.md', '');
		const file = fs.readFileSync(`${fpName}/${filename}`, 'utf-8');
		const matterResult = matter(file);

		return {
			title: matterResult.data.title,
			description: matterResult.data.description,
			category: matterResult.data.category,
			tags: matterResult.data.tags,
			time: matterResult.data.time,
			thumbnail: matterResult.data.thumbnail,
			slug: slug,
		};
	});

	return posts;
};

export const getAllPosts = () => {
	const blogPosts = getPostMetadata("src/data/blog");
	const projectPosts = getPostMetadata("src/data/project");

	return [...blogPosts, ...projectPosts];
}

export const sortPostsByTime = (posts: PostMetadata[]) => {
	posts.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
}

export const getPostContent = (category: string, slug: string) => {
  const file = `src/data/${category}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}
