'use client';

import Image from 'next/image';

const team = [
    {
        name: 'Yusuf Muhammad',
        role: 'CEO / Founder',
        image: '/images/team/yusuf.jpg',
    },
    {
        name: 'Alamin Bello',
        role: 'COO',
        image: '/images/team/alamin.jpg',
    },
    {
        name: 'Idris Ibrahim',
        role: 'CTO',
        image: '/images/team/idris.jpg',
    },
    {
        name: 'Akram',
        role: 'CMO',
        image: '/images/team/akram.jpg',
    },
    {
        name: 'Mohammad Allam',
        role: 'Chief Partnership Officer',
        image: '/images/team/allam.jpg',
    },
    {
        name: 'Jil Endy',
        role: 'Chief Legal Officer',
        image: '/images/team/jil.jpg',
    },
];

export default function TeamSection() {
    return (
        <section className="bg-[#0a0c18] text-white py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet the People Behind Cognitix</h2>
                <p className="text-center text-gray-400 mb-12">
                    A passionate team of builders, engineers, and leaders shaping the future of African software infrastructure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="bg-[#11131f] p-6 rounded-xl text-center border border-white/10 hover:shadow-lg transition"
                        >
                            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-white/10">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
