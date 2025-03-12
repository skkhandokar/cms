import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CMS",
  description: "Central Medicare Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
       <>
       <main className="p-4 bg-blue-500 animate-pulse justify-center text-center font-extrabold text-3xl text-white">Welcome to My Website!</main>
      <Navbar />
    
    </>
        {children}
      </body>
    </html>
  );
}
