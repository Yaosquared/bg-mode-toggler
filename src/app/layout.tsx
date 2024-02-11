import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Bg Mode Toggler",
  description: "Easily toggle between light and dark mode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-[--dark]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
