'use client';

import { motion } from 'framer-motion';
import { Code2, Building2, BrainCircuit, Fingerprint, Layers3, BarChartBig } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import RetroWindow from './ui/RetroWindow';

const services = [
    {
        icon: Code2,
        file: 'WEBDEV.EXE',
        title: 'Custom Web & Mobile Development',
        desc: 'Modern, scalable platforms for startups, governments, and large enterprises.',
    },
    {
        icon: Building2,
        file: 'GOVPORTAL.EXE',
        title: 'Government Portals & e-Services',
        desc: 'We digitize government operations with e-citizen portals, license systems, and tax tools.',
    },
    {
        icon: BrainCircuit,
        file: 'AI_DASH.EXE',
        title: 'AI Dashboards & Automation',
        desc: 'AI-powered insights, predictive analytics, and automation workflows.',
    },
    {
        icon: Fingerprint,
        file: 'IDENTITY.EXE',
        title: 'Digital Identity & KYC',
        desc: 'Biometric-backed user identity systems and secure KYC platforms.',
    },
    {
        icon: Layers3,
        file: 'INTEGRATE.EXE',
        title: 'Enterprise Integration',
        desc: 'Seamlessly connect ERP, CRM, HR, and finance systems.',
    },
    {
        icon: BarChartBig,
        file: 'DATA.EXE',
        title: 'Data Infrastructure',
        desc: 'Build centralized data lakes, real-time analytics, and secure pipelines.',
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-dots relative bg-ink px-4 py-28 text-cream md:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    index="03"
                    label="Services.dir"
                    title="Programs we run"
                    subtitle="We build end-to-end software for governments, enterprises, and mission-driven startups."
                />

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ icon: Icon, file, title, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ delay: (i % 3) * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full"
                        >
                            <RetroWindow title={file} hoverable className="group h-full" bodyClassName="p-6">
                                <div className="mb-5 flex items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-cream bg-gold text-black transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="font-display text-3xl leading-[0.95]">{title}</h3>
                                </div>
                                <p className="text-muted">{desc}</p>
                                <div className="mt-6 h-3 w-full border-2 border-line p-px">
                                    <div className="h-full w-0 bg-[repeating-linear-gradient(90deg,var(--color-cyan)_0_8px,transparent_8px_11px)] transition-[width] duration-700 ease-out group-hover:w-full" />
                                </div>
                            </RetroWindow>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
