import React from "react";
import { PostMain } from "@/components/home/home";


export const generateStaticParams = async () => {
	return [{slug: "about"}]
}

export const generateMetadata = async () => {
  return {
    title: `Roger Chen's Blog | About`,
    description: "Blog from Roger Chen",
  }
}

const AboutPage = () => {
	return (
		<PostMain slug={"about"} category="about"/>
	)
}

export default AboutPage;
