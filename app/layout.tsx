import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


const font = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Pramananda Sarkar",
  description: "Portfolio of Pramananda Sarkar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="profile.jpg" />
      </head>
      <body
        className={`${font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
