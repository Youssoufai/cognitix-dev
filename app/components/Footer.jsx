import Link from 'next/link';
import Image from 'next/image';

const columns = [
    {
        heading: 'Company',
        links: [
            { label: 'Mission', href: '/#mission' },
            { label: 'Services', href: '/#services' },
            { label: 'Guestbook', href: '/#guestbook' },
            { label: 'Contact', href: '/#contact' },
        ],
    },
    {
        heading: 'Projects',
        links: [
            { label: 'Agronet', href: '/#projects' },
            { label: 'CivID', href: '/#projects' },
            { label: 'HealthCloud', href: '/#projects' },
            { label: 'KyCheck', href: '/#projects' },
        ],
    },
    {
        heading: 'Follow Us',
        links: [
            { label: 'Twitter', href: 'https://twitter.com/cognitixdev', external: true },
            { label: 'LinkedIn', href: 'https://linkedin.com/company/cognitix', external: true },
            { label: 'Email Us', href: 'mailto:getskulapp@gmail.com', external: true },
        ],
    },
];

const badges = ['Made in Africa', 'Best viewed at any resolution', 'Y2K compliant', 'Powered by coffee'];

export default function Footer() {
    return (
        <footer className="border-t-4 border-gold bg-black px-4 pb-10 pt-16 text-cream md:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
                <div className="col-span-2 md:col-span-1">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="relative block h-10 w-10 overflow-hidden border-2 border-cream">
                            <Image src="/images/logo.jpg" alt="Cognitix logo" fill sizes="40px" className="object-cover" />
                        </span>
                        <span className="font-display text-3xl">Cognitix</span>
                    </div>
                    <p className="max-w-xs text-sm text-muted">
                        Building the software layer for Africa’s future — one product at a time.
                    </p>
                </div>

                {columns.map((col) => (
                    <div key={col.heading}>
                        <h4 className="mb-4 font-pixel text-[10px] uppercase text-gold">{col.heading}</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            {col.links.map((l) => (
                                <li key={l.label}>
                                    {l.external ? (
                                        <a
                                            href={l.href}
                                            {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="transition hover:text-cream"
                                        >
                                            <span className="text-pink">›</span> {l.label}
                                        </a>
                                    ) : (
                                        <Link href={l.href} className="transition hover:text-cream">
                                            <span className="text-pink">›</span> {l.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mx-auto mt-14 flex max-w-7xl flex-wrap justify-center gap-3">
                {badges.map((b) => (
                    <span
                        key={b}
                        className="border-2 border-line bg-ink-2 px-2.5 py-1.5 font-pixel text-[8px] uppercase text-muted"
                    >
                        {b}
                    </span>
                ))}
            </div>

            <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t-2 border-dashed border-line pt-6 font-display text-lg text-muted sm:flex-row">
                <span>© {new Date().getFullYear()} Cognitix Development. All rights reserved.</span>
                <Link href="/#top" className="text-gold transition hover:text-pink">
                    ▲ Back to top
                </Link>
            </div>
        </footer>
    );
}
