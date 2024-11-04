"use client";

import { Box, Toolbar } from "@mui/material"
import styles from '@/components/home/article.module.css'
import Head from 'next/head';
import { useEffect } from "react";

const Article = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

	useEffect(() => {
		const loadHighlightJs = async () => {
      if (!window.hljs) {
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
        script.async = true;
        script.onload = () => {
          if (window.hljs) {
            window.hljs.highlightAll();
          }
        };
        document.body.appendChild(script);
      } else {
        window.hljs.highlightAll();
      }
    };

    loadHighlightJs();
  }, []);

	return (
		<>
		<Head> 
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css" precedence="default"/>
		</Head>
		<Box className={`${styles.article} fly`}>
			<Toolbar />
      <Toolbar />
			{ children }
		</Box>
		</>
	);
}

export default Article;