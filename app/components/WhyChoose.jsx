'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const features = [
    {
        icon: ShieldCheck,
        title: 'Government-Grade Security',
        desc: 'We build with compliance, data protection, and military-grade encryption for public sector use.',
        color: 'var(--color-cyan)',
    },
    {
        icon: Cpu,
        title: 'Smart, Scalable Software',
        desc: 'Our systems evolve with your needs — scalable APIs, modular architecture, and AI-powered insights.',
        color: 'var(--color-pink)',
    },
    {
        icon: Globe,
        title: 'Built for Africa',
        desc: 'Deep understanding of local challenges in identity, agriculture, commerce, and governance.',
        color: 'var(--color-gold)',
    },
];

export default function WhyChoose() {
    return (
        <section className="relative bg-ink-2 px-4 py-28 text-cream md:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading index="02" label="Why_Cognitix.exe" title="Why choose Cognitix?" />

                <div className="grid gap-10 md:grid-cols-3">
                    {features.map(({ icon: Icon, title, desc, color }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 40, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.12, duration: 0.6, type: 'spring', bounce: 0.3 }}
                            whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
                            className="group relative"
                        >
                            {/* floppy disk */}
                            <div
                                className="relative h-full border-2 border-cream bg-panel p-7 pt-16"
                                style={{ boxShadow: `8px 8px 0 0 ${color}` }}
                            >
                                <div className="absolute left-1/2 top-0 flex h-12 w-1/2 -translate-x-1/2 items-center justify-end border-2 border-t-0 border-cream bg-[#9aa0c4] pr-3">
                                    <span className="h-7 w-5 bg-ink transition-transform duration-500 group-hover:-translate-x-16" />
                                </div>
                                <span className="absolute left-4 top-4 font-pixel text-[10px] text-muted">0{i + 1}</span>

                                <div
                                    className="mb-5 inline-flex h-14 w-14 items-center justify-center border-2 border-cream text-black"
                                    style={{ background: color }}
                                >
                                    <Icon className="h-7 w-7" strokeWidth={2.25} />
                                </div>
                                <h3 className="mb-3 font-display text-3xl leading-none">{title}</h3>
                                <p className="text-muted">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
