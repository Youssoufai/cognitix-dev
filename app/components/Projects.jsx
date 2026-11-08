'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sprout, Fingerprint, HeartPulse, ShieldCheck, GraduationCap, Bike, Scissors } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import RetroWindow from './ui/RetroWindow';

const projects = [
    {
        title: 'Agronet',
        desc: 'A digital marketplace connecting farmers directly to companies that need raw materials — streamlining the agricultural supply chain across Africa.',
        image: '/images/agronet.png',
        icon: Sprout,
        status: 'In Development',
        hue: 'from-[#14532d] to-[#365314]',
    },
    /*
    {
        title: 'CivID – Digital ID System',
        desc: 'A biometric-backed identity platform for African governments, enabling real-time verification, public access portals, and developer APIs.',
        icon: Fingerprint,
        status: 'Private Beta',
        hue: 'from-[#1e1b4b] to-[#1e3a8a]',
    },
    */
    /*
    {
        title: 'HealthCloud',
        desc: 'A unified health records and e-consultation platform for clinics, labs, pharmacies, and hospitals — powering digital healthcare systems.',
        icon: HeartPulse,
        status: 'Live',
        hue: 'from-[#4c0519] to-[#831843]',
    },
    */
    /*
    {
        title: 'KyCheck – KYC-as-a-Service',
        desc: 'A plug-and-play KYC API + dashboard for African fintechs and platforms. Supports NIN, BVN, ID match, facial recognition, and real-time checks.',
        icon: ShieldCheck,
        status: 'In Development',
        hue: 'from-[#083344] to-[#155e75]',
    },
    */
    {
        title: 'SKUL – Campus Operating System',
        desc: 'A platform for higher institutions — lecturers open a class in seconds, students check in from their own devices, and courses, timetables, and attendance records stay in one place.',
        image: '/images/skul.png',
        icon: GraduationCap,
        link: 'https://getskul-theta.vercel.app/',
        status: 'In Development',
        hue: 'from-[#3b0764] to-[#6b21a8]',
    },
    /*
    {
        title: 'RiderX – White-Label Delivery Stack',
        desc: 'A logistics and delivery OS for local rider fleets and vendors — with rider tracking, route assignment, customer SMS/WhatsApp updates, and payments.',
        icon: Bike,
        status: 'Prototype',
        hue: 'from-[#431407] to-[#9a3412]',
    },
    */
    /*
    {
        title: 'HustleKit – Micro SaaS Toolkit',
        desc: 'A digital toolkit for tailors, barbers, and caterers — with mini websites, WhatsApp CRM, and payment links to grow their hustle online.',
        icon: Scissors,
        status: 'Coming Soon',
        hue: 'from-[#422006] to-[#a16207]',
    },
    */
];

const STATUS = {
    Live: 'bg-green',
    'In Development': 'bg-gold',
    'Private Beta': 'bg-cyan',
    Prototype: 'bg-pink',
    'Coming Soon': 'bg-muted',
};

function fileName(title) {
    return title.split(' – ')[0].toUpperCase().replace(/\s+/g, '_') + '.EXE';
}

export default function Projects() {
    return (
        <section id="projects" className="relative bg-ink-2 px-4 py-28 text-cream md:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    index="04"
                    label="Projects.dir"
                    title="Featured projects"
                    subtitle="Platforms we’re building to modernize African governments, empower small businesses, and unlock scale for the next generation of innovation."
                />

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((proj, i) => {
                        const Icon = proj.icon;
                        return (
                            <motion.article
                                key={proj.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: (i % 3) * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className={i === 0 ? 'sm:col-span-2' : ''}
                            >
                                <RetroWindow title={fileName(proj.title)} hoverable className="group flex h-full flex-col" bodyClassName="flex flex-1 flex-col">
                                    <div className={`screen-lines relative ${i === 0 ? 'h-56 lg:h-64' : 'h-48'} overflow-hidden border-b-2 border-cream bg-gradient-to-br ${proj.hue}`}>
                                        {proj.image ? (
                                            <Image
                                                src={proj.image}
                                                alt={proj.title}
                                                fill
                                                sizes="(min-width: 1024px) 800px, 100vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="absolute h-40 w-40 rounded-full bg-white/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                                                <Icon
                                                    className="relative h-20 w-20 text-cream/90 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6"
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                        )}
                                        <span className="absolute left-3 top-3 z-10 flex items-center gap-2 border-2 border-cream bg-black/80 px-2 py-1 font-pixel text-[8px] uppercase text-cream">
                                            <span className={`h-2 w-2 ${STATUS[proj.status] ?? 'bg-muted'} ${proj.status === 'Live' ? 'animate-blink' : ''}`} />
                                            {proj.status}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="mb-3 font-display text-3xl leading-none">{proj.title}</h3>
                                        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{proj.desc}</p>
                                        <a
                                            href={proj.link ?? `mailto:getskulapp@gmail.com?subject=${encodeURIComponent(`About ${proj.title}`)}`}
                                            {...(proj.link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="self-start font-pixel text-[10px] uppercase text-gold transition hover:text-pink"
                                        >
                                            {proj.link ? 'Visit site' : 'Ask about it'} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                        </a>
                                    </div>
                                </RetroWindow>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
