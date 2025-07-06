'use client';

import { ShieldCheck, Cpu, Globe } from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: 'Government-Grade Security',
        desc: 'We build with compliance, data protection, and military-grade encryption for public sector use.',
    },
    {
        icon: Cpu,
        title: 'Smart, Scalable Software',
        desc: 'Our systems evolve with your needs — scalable APIs, modular architecture, and AI-powered insights.',
    },
    {
        icon: Globe,
        title: 'Built for Africa',
        desc: 'Deep understanding of local challenges in identity, agriculture, commerce, and governance.',
    },
];

export default function WhyChoose() {
    return (
        <section className="bg-background text-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Why Choose Cognitix?
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex flex-col items-center text-center space-y-4">
                            <div className="bg-gold text-background p-4 rounded-full">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-gray-light max-w-xs">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
