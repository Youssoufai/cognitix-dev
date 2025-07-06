'use client';

import {
    Code2,
    Building2,
    BrainCircuit,
    Fingerprint,
    Layers3,
    BarChartBig,
} from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: 'Custom Web & Mobile Development',
        desc: 'Modern, scalable platforms for startups, governments, and large enterprises.',
    },
    {
        icon: Building2,
        title: 'Government Portals & e-Services',
        desc: 'We digitize government operations with e-citizen portals, license systems, and tax tools.',
    },
    {
        icon: BrainCircuit,
        title: 'AI Dashboards & Automation',
        desc: 'AI-powered insights, predictive analytics, and automation workflows.',
    },
    {
        icon: Fingerprint,
        title: 'Digital Identity & KYC',
        desc: 'Biometric-backed user identity systems and secure KYC platforms.',
    },
    {
        icon: Layers3,
        title: 'Enterprise Integration',
        desc: 'Seamlessly connect ERP, CRM, HR, and finance systems.',
    },
    {
        icon: BarChartBig,
        title: 'Data Infrastructure',
        desc: 'Build centralized data lakes, real-time analytics, and secure pipelines.',
    },
];

export default function Services() {
    return (
        <section className="bg-background text-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-light mb-12">
                    We build end-to-end software for governments, enterprises, and mission-driven startups.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="bg-[#11131f] rounded-xl p-6 text-left border border-white/10 hover:border-gold transition"
                        >
                            <div className="bg-gold text-background p-3 rounded-full w-fit mb-4">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{title}</h3>
                            <p className="text-gray-light text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
