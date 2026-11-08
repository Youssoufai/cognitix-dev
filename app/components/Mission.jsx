import Image from 'next/image';
import Reveal from './ui/Reveal';
import RetroWindow from './ui/RetroWindow';

const focus = ['Digital Identity', 'Agriculture', 'Automation', 'Public Sector'];

export default function Mission() {
    return (
        <section id="mission" className="bg-dots relative bg-ink px-4 py-28 text-cream md:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <Reveal>
                    <span className="mb-5 inline-flex items-center gap-2 border-2 border-cyan bg-ink-2 px-3 py-2 font-pixel text-[10px] uppercase tracking-wider text-cyan">
                        <span className="text-pink">[01]</span> Mission.txt
                    </span>
                    <h2 className="mb-8 font-display text-5xl leading-[0.95] md:text-7xl">
                        Tech that solves <span className="text-gold text-glow">real problems.</span>
                    </h2>

                    <RetroWindow title="MISSION.TXT — Notepad" bodyClassName="bg-cream p-6 text-black">
                        <p className="mb-4 text-lg leading-relaxed">
                            At Cognitix, our mission is to build scalable, secure, and intelligent software
                            solutions that enable governments, startups, and enterprises across Africa to thrive
                            in the digital age.
                        </p>
                        <p className="leading-relaxed text-black/75">
                            We believe technology should solve real problems — improve access, reduce cost, empower
                            citizens, and unlock economic growth. That’s why we design platforms that power everything
                            from digital identity and agriculture to automation and public sector transformation.
                            <span className="ml-0.5 inline-block h-5 w-2 translate-y-1 animate-blink bg-black" />
                        </p>
                    </RetroWindow>

                    <ul className="mt-8 flex flex-wrap gap-3">
                        {focus.map((f) => (
                            <li key={f} className="border-2 border-line bg-panel px-3 py-2 font-pixel text-[9px] uppercase text-muted">
                                ✦ {f}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
                    {/* CRT monitor */}
                    <div className="relative rounded-[28px] border-2 border-cream bg-[#cfc6ad] p-5 pb-12 shadow-[10px_10px_0_0_var(--color-indigo)]">
                        <div className="screen-lines animate-flicker relative aspect-[4/3] overflow-hidden rounded-[18px] border-4 border-[#2b2a26] bg-ink-2 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
                            <Image
                                src="/images/mission.png"
                                alt="Cognitix mission illustration"
                                fill
                                sizes="(min-width: 1024px) 560px, 90vw"
                                className="object-contain p-4"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.15),transparent_55%)]" />
                        </div>
                        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                            <span className="font-pixel text-[9px] text-[#2b2a26]">COGNITIX CRT-98</span>
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 animate-blink rounded-full bg-green" />
                                <span className="h-3 w-8 rounded-sm bg-[#2b2a26]/30" />
                            </span>
                        </div>
                    </div>
                    <div className="mx-auto h-6 w-32 border-x-2 border-cream bg-[#b8ae93]" />
                    <div className="mx-auto h-4 w-56 rounded-t-md border-2 border-cream bg-[#cfc6ad]" />
                </Reveal>
            </div>
        </section>
    );
}
