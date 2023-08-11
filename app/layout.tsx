import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Provider from "@/app/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoosNotes",
  description: "View and Share Class Notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
            <div className="mb-24" />
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
