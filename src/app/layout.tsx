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
      <body>
        <Header />
        <Box sx={{ display: 'flex', p: 3 }}>
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Article>
              {children}
            </Article>
          </Box>
        </Box>
        <Footer />
      </body>
    </html>
  );
}
