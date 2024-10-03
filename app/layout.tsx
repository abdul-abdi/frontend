import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';
import { Providers } from '@/components/Providers';
import { Footer } from '@/components/Footer'; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-b from-dark-bg to-blue-900 min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
