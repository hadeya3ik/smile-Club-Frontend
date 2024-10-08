import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";

export const metadata: Metadata = {
  title: "SMILE CLUB",
  description: "Supporting Students on Their Journey to Foster Positive Mental Health at the University of Waterloo",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

const ppNeueMontreal = localfont({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-ppneuemonteal', 
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ppNeueMontreal.variable} bg-[#F4F2E3]`}>{children}</body>
    </html>
  );
}
