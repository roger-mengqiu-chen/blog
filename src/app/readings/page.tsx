import Markdown from "markdown-to-jsx";
import { Box } from "@mui/material";
import { getPostContent } from "@/utils/post_utils";
import React from "react";
import CustomImage from "@/components/home/custom_image";


export const generateStaticParams = async () => {
	return [{slug: "readings"}]
}

export const generateMetadata = async () => {
  return {
    title: `Roger Chen's Readings`,
    description: "Books read by Roger Chen",
  }
}

const ReadingPage = () => {
  const post = getPostContent("readings", "readings");

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

export default ReadingPage;