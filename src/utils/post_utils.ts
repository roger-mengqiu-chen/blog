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

export const getPostContent = (category: string, slug: string) => {
  const file = `src/data/${category}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}
