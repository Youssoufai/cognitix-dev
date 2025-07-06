'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-background text-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Text */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Building the Future of Software in Africa.
                    </h1>
                    <p className="mt-4 text-lg text-gray-light max-w-xl">
                        Cognitix Development creates modern web, mobile, and AI-powered platforms for governments, startups, and enterprises.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <Link
                            href="/contact"
                            className="bg-gold hover:bg-indigo text-background px-6 py-3 rounded-md font-medium transition"
                        >
                            Get Proposal
                        </Link>
                        <Link
                            href="/projects"
                            className="border border-white hover:border-gold text-white hover:text-gold px-6 py-3 rounded-md font-medium transition"
                        >
                            See Projects
                        </Link>
                    </div>
                </div>

                {/* Optional Right Image or Graphic */}
                <div className="hidden md:block">
                    <Image
                        src="/images/worspace.png"
                        alt="Cognitix Software Illustration"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
