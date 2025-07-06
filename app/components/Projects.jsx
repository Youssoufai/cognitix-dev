'use client';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        title: 'Agronet Marketplace',
        desc: 'A digital marketplace connecting farmers directly to companies that need raw materials — streamlining the agricultural supply chain across Africa.',
        image: '/images/project-agronet.png',
        link: '/projects/agronet',
        status: 'In Development',
    },
    {
        title: 'CivID – Digital ID System',
        desc: 'A biometric-backed identity platform for African governments, enabling real-time verification, public access portals, and developer APIs.',
        image: '/images/project-civid.png',
        link: '/projects/civid',
        status: 'Private Beta',
    },
    {
        title: 'HealthCloud',
        desc: 'A unified health records and e-consultation platform for clinics, labs, pharmacies, and hospitals — powering digital healthcare systems.',
        image: '/images/project-healthcloud.png',
        link: '/projects/healthcloud',
        status: 'Live',
    },
    {
        title: 'KyCheck – KYC-as-a-Service',
        desc: 'A plug-and-play KYC API + dashboard for African fintechs and platforms. Supports NIN, BVN, ID match, facial recognition, and real-time checks.',
        image: '/images/project-kycheck.png',
        link: '/projects/kycheck',
        status: 'In Development',
    },
    {
        title: 'EduOS – School Operating System',
        desc: 'A simple platform for African private and public schools — handling grades, fees, SMS updates, learning support, and finance all in one.',
        image: '/images/project-eduos.png',
        link: '/projects/eduos',
        status: 'In Development',
    },
    {
        title: 'RiderX – White-Label Delivery Stack',
        desc: 'A logistics and delivery OS for local rider fleets and vendors — with rider tracking, route assignment, customer SMS/WhatsApp updates, and payments.',
        image: '/images/project-riderx.png',
        link: '/projects/riderx',
        status: 'Prototype',
    },
    {
        title: 'HustleKit – Micro SaaS Toolkit',
        desc: 'A digital toolkit for tailors, barbers, and caterers — with mini websites, WhatsApp CRM, and payment links to grow their hustle online.',
        image: '/images/project-hustlekit.png',
        link: '/projects/hustlekit',
        status: 'Coming Soon',
    },
];

export default function Projects() {
    return (
        <section className="bg-[#0a0c18] text-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
                <p className="text-center text-gray-400 mb-12">
                    Platforms we’re building to modernize African governments, empower small businesses, and unlock scale for the next generation of innovation.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className="bg-[#11131f] border border-white/10 rounded-xl overflow-hidden hover:shadow-lg transition"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={proj.image}
                                    alt={proj.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold">{proj.title}</h3>
                                    {proj.status && (
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full font-medium
                    ${proj.status === 'Live'
                                                    ? 'bg-[#16a34a] text-white'
                                                    : proj.status === 'In Development'
                                                        ? 'bg-[#ca8a04] text-white'
                                                        : proj.status === 'Private Beta'
                                                            ? 'bg-[#2563eb] text-white'
                                                            : proj.status === 'Prototype'
                                                                ? 'bg-[#4b5563] text-white'
                                                                : 'bg-[#374151] text-white'
                                                }
                  `}
                                        >
                                            {proj.status}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{proj.desc}</p>
                                <Link
                                    href={proj.link}
                                    className="text-yellow-400 font-medium hover:underline"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
