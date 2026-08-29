import type {Metadata} from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Article from "@/components/home/article";
import {Box, CssBaseline} from "@mui/material";
import {GoogleAnalytics} from '@next/third-parties/google';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v16-appRouter';
import "./global.css";


export const metadata: Metadata = {
  title: "Roger Chen's Site",
  description: "A site from a software developer",
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
    <AppRouterCacheProvider>
      <CssBaseline/>
      <Header/>
      <Box component="main" className="fly">
        <Article>
          {children}
        </Article>
      </Box>
      <Footer/>
    </AppRouterCacheProvider>
    </body>
    <GoogleAnalytics gaId="G-D8TELP8YEW"/>
    </html>
  );
}

