import Markdown from "markdown-to-jsx";
import { Box } from "@mui/material";
import { getPostContent } from "@/utils/post_utils";
import React from "react";
import CustomImage from "@/components/home/custom_image";


export const generateStaticParams = async () => {
	return [{slug: "about"}]
}

export const generateMetadata = async () => {
  return {
    title: `Roger Chen's Blog`,
    description: "Blog from Roger Chen",
  }
}

const AboutPage = () => {
  const post = getPostContent("about", "about");

  return (
    <Box component="article">
      <Markdown
        options={{
        overrides: {
          img: {
            component: CustomImage,
          },
        },
      }}>{post.content}</Markdown>
    </Box>
  );
}

export default AboutPage;
