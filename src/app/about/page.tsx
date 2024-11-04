import Markdown from "markdown-to-jsx";
import { Box } from "@mui/material";
import { getPostContent } from "@/utils/post_utils";
import React from "react";
import CustomImage from "@/components/home/custom_image";
import { PostMain } from "@/components/home/home";


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
	return (
		<PostMain slug={"about"} category="about"/>
	)
	
}

export default AboutPage;
