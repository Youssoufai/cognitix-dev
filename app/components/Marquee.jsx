const ITEMS = [
    'Web & Mobile',
    'Government e-Services',
    'AI Dashboards',
    'Digital Identity',
    'KYC APIs',
    'Data Infrastructure',
    'Enterprise Integration',
    'Built for Africa',
];

export default function Marquee() {
    const row = [...ITEMS, ...ITEMS];
    return (
        <div className="relative -left-[2.5%] z-10 w-[105%] -rotate-1 overflow-hidden border-y-2 border-cream bg-gold py-3 text-black" aria-hidden="true">
            <div className="flex w-max animate-marquee">
                {row.map((item, i) => (
                    <span key={i} className="flex items-center gap-6 px-6 font-pixel text-xs uppercase">
                        {item} <span className="text-pink">★</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
