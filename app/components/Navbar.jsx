'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/#top' },
    { name: 'Mission', href: '/#mission' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Guestbook', href: '/#guestbook' },
    { name: 'Contact', href: '/#contact' },
];

function Clock() {
    const [time, setTime] = useState('');
    useEffect(() => {
        const tick = () =>
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        tick();
        const id = setInterval(tick, 15000);
        return () => clearInterval(id);
    }, []);
    return (
        <span className="hidden min-w-[5.5rem] border-2 border-line bg-ink-2 px-3 py-1.5 text-center font-display text-xl text-cyan lg:inline-block">
            {time || '--:--'}
        </span>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full border-b-2 transition-colors duration-300 ${
                scrolled || isOpen ? 'border-gold bg-ink/90 backdrop-blur-md' : 'border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
                <Link href="/#top" className="group flex items-center gap-3">
                    <span className="relative block h-10 w-10 overflow-hidden border-2 border-cream shadow-[3px_3px_0_0_var(--color-pink)] transition-transform group-hover:-rotate-6">
                        <Image src="/images/logo.jpg" alt="Cognitix logo" fill sizes="40px" className="object-cover" />
                    </span>
                    <span className="font-display text-3xl leading-none text-cream">
                        Cognitix<span className="text-gold">.dev</span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-3 py-2 font-pixel text-[10px] uppercase text-muted transition hover:bg-gold hover:text-black"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Clock />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="border-2 border-cream p-1.5 text-cream md:hidden"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-4 pb-5">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -16, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.04 * i }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block border-l-4 border-transparent px-3 py-3 font-pixel text-xs uppercase text-cream transition hover:border-gold hover:bg-panel hover:text-gold"
                                    >
                                        <span className="text-pink">&gt;</span> {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
