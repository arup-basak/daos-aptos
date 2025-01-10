import type { Metadata } from "next";
import RootLayoutProvider from "@/provider/RootLayoutProvider";
import { Jost as FontSans } from "next/font/google";
import "./globals.css";

const mFont = FontSans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "DAOs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mFont.className} antialiased bg-white dark:bg-black`}>
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
