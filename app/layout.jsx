import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Cognitix Development",
  description: "Official Cognitix Development Website",
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}