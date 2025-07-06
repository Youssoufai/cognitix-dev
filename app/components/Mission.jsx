'use client';

import Image from 'next/image';

export default function Mission() {
    return (
        <section className="bg-background text-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-light text-lg mb-4">
                        At Cognitix, our mission is to build scalable, secure, and intelligent software
                        solutions that enable governments, startups, and enterprises across Africa to thrive
                        in the digital age.
                    </p>
                    <p className="text-gray-light text-base">
                        We believe technology should solve real problems — improve access, reduce cost, empower
                        citizens, and unlock economic growth. That’s why we design platforms that power everything
                        from digital identity and agriculture to automation and public sector transformation.
                    </p>
                </div>

                {/* Image or Illustration */}
                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src="/images/mission.png"
                        alt="Cognitix Mission"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
