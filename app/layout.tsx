import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Rank - Your College Ranking Platform",
  description:
    "Campus Rank is a platform that allows you to rank colleges based on real student experiences and data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="Campus Rank - Your College Ranking Platform"
      />
      <meta
        property="og:url"
        content="https://campus-rank.priynshuchouhn.engineer/"
      />
      <meta name="twitter:image" content="/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9445216269913649"crossOrigin="anonymous"></script>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
