import * as fs from 'fs';
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  description: string;
  time: string;
  slug: string;
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
			time: matterResult.data.time,
			slug: slug,
		};
	});
	return posts;
};
