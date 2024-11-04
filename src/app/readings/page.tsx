import React from "react";
import { PostMain } from "@/components/home/home";


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
	return (
	<PostMain slug={"readings"} category="reading"/>
	)
}

export default ReadingPage;