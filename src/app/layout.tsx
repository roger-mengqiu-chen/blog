import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Article from "@/components/home/article";
import { Box } from "@mui/material";


export const metadata: Metadata = {
  title: "Roger Chen's Blog",
  description: "A blog from a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.7.0/styles/github-dark.min.css" precedence="default"
        />
      </head>
      <body>
      
      <Header />
      <Box component="main">
        <Article>
          {children}
        </Article>
      </Box>
        
        <Footer />
      </body>
    </html>
  );
}
