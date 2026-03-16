import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Alegria | Surinaamse smaken sinds 1983",
  description:
    "Surinaams restaurant sinds 1983 met locaties in Paramaribo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="bg-[#111111] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}