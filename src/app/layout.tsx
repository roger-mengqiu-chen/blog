import type { Metadata } from "next";
import Header from "@/components/header/header";
import { Toolbar, Box } from "@mui/material";


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
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </body>
    </html>
  );
}
