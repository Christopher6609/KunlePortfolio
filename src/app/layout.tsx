import type { Metadata } from "next";

import "./globals.css";
import Container from "./Container";
import Navigation from "./Navigation";





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
      <body>
        <Container >
          <Navigation />
          {children}
        </Container>

      </body>
    </html>
  );
}
