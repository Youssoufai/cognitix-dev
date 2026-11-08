'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const testimonials = [
    {
        name: 'Aisha Bello',
        title: 'Product Lead, NairaLend',
        quote: `Working with Cognitix felt like working with our in-house tech team. They understood our goals from day one and executed flawlessly.`,
        color: 'var(--color-pink)',
    },
    {
        name: 'David Umeh',
        title: 'Founder, RideNow Logistics',
        quote: `Their delivery stack helped us go from chaos to coordination. We now track every delivery in real-time — and our customers notice it.`,
        color: 'var(--color-cyan)',
    },
    {
        name: 'Ngozi Ibe',
        title: 'Director of Digital Transformation, GovTech Nigeria',
        quote: `Cognitix built and deployed a prototype for our ID system in weeks. They’re fast, reliable, and truly understand African systems.`,
        color: 'var(--color-gold)',
    },
];

const initials = (name) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2);

export default function TestimonialsSection() {
    return (
        <section id="guestbook" className="bg-dots relative bg-ink px-4 py-28 text-cream md:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    index="05"
                    label="Guestbook.html"
                    title="Sign the guestbook"
                    subtitle="Leaders and clients trust us to deliver bold, African-first technology that works."
                />

                <div className="grid gap-10 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 40, rotate: (i - 1) * 4 }}
                            whileInView={{ opacity: 1, y: 0, rotate: (i - 1) * 1.2 }}
                            whileHover={{ rotate: 0, scale: 1.03 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.12, type: 'spring', bounce: 0.35, duration: 0.7 }}
                            className="flex flex-col border-2 border-cream bg-panel"
                            style={{ boxShadow: `8px 8px 0 0 ${t.color}` }}
                        >
                            <div className="flex items-center justify-between border-b-2 border-dashed border-line px-4 py-2 font-pixel text-[8px] uppercase text-muted">
                                <span>Entry #{String(i + 1).padStart(3, '0')}</span>
                                <span style={{ color: t.color }}>★★★★★</span>
                            </div>
                            <blockquote className="flex-1 p-6 font-display text-2xl leading-snug text-cream">
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="flex items-center gap-4 border-t-2 border-line p-5">
                                <span
                                    className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-cream font-pixel text-xs text-black"
                                    style={{ background: t.color }}
                                    aria-hidden="true"
                                >
                                    {initials(t.name)}
                                </span>
                                <span>
                                    <span className="block font-semibold">{t.name}</span>
                                    <span className="block text-sm text-muted">{t.title}</span>
                                </span>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
