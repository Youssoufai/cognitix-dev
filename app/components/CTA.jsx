'use client';

import Link from 'next/link';

export default function CtaSection() {
    return (
        <section className="bg-[#0b0d1c] text-white py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let’s Build Something Bold
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Whether you're a government agency, a startup founder, or a visionary company — we’re ready to turn bold ideas into real, working platforms across Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
                    >
                        Get In Touch
                    </Link>
                    <Link
                        href="/services"
                        className="border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
