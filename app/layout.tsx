import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moti Leggese - Portfolio",
  description: "Portfolio of Moti Leggese, Software Engineering Student",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#home" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Moti Leggese Logo" width={40} height={40} className="rounded-full" />
              <span className="text-white font-bold text-xl">Moti Leggese</span>
            </a>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a></li>
                <li><a href="#skills" className="text-white hover:text-yellow-400 transition-colors duration-300">Skills</a></li>
                <li><a href="#volunteer" className="text-white hover:text-yellow-400 transition-colors duration-300">Volunteer Activity</a></li>
                <li><a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-black bg-opacity-50 backdrop-blur-sm text-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Direct Contact</h2>
              <p>Email: <a href="mailto:motileggese@gmail.com" className="hover:text-yellow-400 transition-colors duration-300">motileggese@gmail.com</a></p>
              <p>Phone: +251922426411</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Social Media</h2>
              <div className="flex gap-4">
                <a href="https://t.me/motiition" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image src="/images/telegram.jpg" alt="telegram" width={30} height={30} className="rounded" />
                </a>
                <a href="https://x.com/Moti24140143?t=_pUUa3pqlhg19NHuSnhmpA&s=35" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image src="/images/x.jpeg" alt="X" width={30} height={30} className="rounded" />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Address</h2>
              <p>Ghana St., Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 Moti Leggese</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
