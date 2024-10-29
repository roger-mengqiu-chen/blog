import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header/header";
import { Toolbar, Box } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </body>
    </html>
  );
}
