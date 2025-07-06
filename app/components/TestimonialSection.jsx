'use client';

import Image from 'next/image';

const testimonials = [
    {
        name: 'Aisha Bello',
        title: 'Product Lead, NairaLend',
        quote: `Working with Cognitix felt like working with our in-house tech team. They understood our goals from day one and executed flawlessly.`,
        image: '/images/testimonials/aisha.jpg',
    },
    {
        name: 'David Umeh',
        title: 'Founder, RideNow Logistics',
        quote: `Their delivery stack helped us go from chaos to coordination. We now track every delivery in real-time — and our customers notice it.`,
        image: '/images/testimonials/david.jpg',
    },
    {
        name: 'Ngozi Ibe',
        title: 'Director of Digital Transformation, GovTech Nigeria',
        quote: `Cognitix built and deployed a prototype for our ID system in weeks. They’re fast, reliable, and truly understand African systems.`,
        image: '/images/testimonials/ngozi.jpg',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-[#0a0c18] text-white py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What People Are Saying</h2>
                <p className="text-center text-gray-400 mb-12">
                    Leaders and clients trust us to deliver bold, African-first technology that works.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#11131f] border border-white/10 p-6 rounded-xl shadow-md"
                        >
                            <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
