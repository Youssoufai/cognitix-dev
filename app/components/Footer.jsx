'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0a0c18] text-white py-16 px-4 md:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & Tagline */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <Image
                            src="/images/logo.jpg"
                            alt="Cognitix Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="text-xl font-semibold">Cognitix</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Building the software layer for Africa’s future — one product at a time.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-white">Services</Link></li>
                        <li><Link href="/team" className="hover:text-white">Team</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Projects */}
                <div>
                    <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Projects</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/projects/agronet" className="hover:text-white">Agronet</Link></li>
                        <li><Link href="/projects/civid" className="hover:text-white">CivID</Link></li>
                        <li><Link href="/projects/healthcloud" className="hover:text-white">HealthCloud</Link></li>
                        <li><Link href="/projects/kycheck" className="hover:text-white">KyCheck</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-gray-300">Follow Us</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="https://twitter.com/cognitixdev" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
                        <li><a href="https://linkedin.com/company/cognitix" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
                        <li><a href="mailto:hello@cognitix.dev" className="hover:text-white">Email Us</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-12 text-center text-xs text-gray-500 border-t border-white/10 pt-6">
                © {new Date().getFullYear()} Cognitix Development. All rights reserved.
            </div>
        </footer>
    );
}
