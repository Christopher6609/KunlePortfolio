import type { Metadata } from "next";

import "./globals.css";
import Container from "./Container";
import Navigation from "./Navigation";
import Footer from "./Footer";





export const metadata: Metadata = {
  title: "KunleOladosu",
  description: "Kunle Oladosu Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-[#000] dark:text-[#DAC5A7]">
        <Navigation />
        <Container >
          {children}
        </Container>
        <Footer />


      </body>
    </html>
  );
}
