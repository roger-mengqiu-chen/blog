import type { Metadata } from "next";
import Header from "@/components/header/header";
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
          <Box component="main" sx={{ flexGrow: 1, ml: 3 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
