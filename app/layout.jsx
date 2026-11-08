import { IBM_Plex_Sans, Press_Start_2P, VT323 } from 'next/font/google';
import BootScreen from './components/BootScreen';
import Footer from './components/Footer';
import MotionProvider from './components/MotionProvider';
import Navbar from './components/Navbar';
import './globals.css';

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
});
const vt323 = VT323({ subsets: ['latin'], weight: '400', variable: '--font-vt323', display: 'swap' });
const pixel = Press_Start_2P({ subsets: ['latin'], weight: '400', variable: '--font-pixel-2p', display: 'swap' });

export const metadata = {
  title: 'Cognitix Development',
  description: 'Official Cognitix Development Website',
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plex.variable} ${vt323.variable} ${pixel.variable}`}>
      <body>
        <MotionProvider>
          <BootScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
        <div className="crt-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
