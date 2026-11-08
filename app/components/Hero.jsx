'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RetroWindow from './ui/RetroWindow';

const WORDS = ['Software', 'Platforms', 'AI Systems', 'Digital ID', 'GovTech'];

// deterministic star field (avoids hydration mismatch)
const STARS = Array.from({ length: 40 }, (_, i) => ({
    left: (i * 37.3) % 100,
    top: (i * 23.7) % 55,
    size: i % 5 === 0 ? 3 : 2,
    delay: (i % 7) * 0.45,
}));

const TERMINAL = [
    '> cognitix init --region=africa',
    '  ✓ identity    ✓ agriculture',
    '  ✓ health      ✓ fintech',
    '> deploy --scale=continental',
    '  shipping the future…',
];

function Typewriter() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = WORDS[wordIndex];
        let delay = deleting ? 45 : 95;
        if (!deleting && text === word) delay = 1600;
        if (deleting && text === '') delay = 300;

        const t = setTimeout(() => {
            if (!deleting && text === word) setDeleting(true);
            else if (deleting && text === '') {
                setDeleting(false);
                setWordIndex((i) => (i + 1) % WORDS.length);
            } else {
                setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
            }
        }, delay);
        return () => clearTimeout(t);
    }, [text, deleting, wordIndex]);

    return (
        <span className="text-chrome whitespace-nowrap">
            {text}
            <span className="animate-blink text-gold [-webkit-text-fill-color:var(--color-gold)]">_</span>
        </span>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
    return (
        <section id="top" className="synth-sky relative isolate overflow-hidden pt-28 text-cream md:pt-32">
            {/* stars */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
                {STARS.map((s, i) => (
                    <span
                        key={i}
                        className="absolute animate-twinkle bg-cream"
                        style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
                    />
                ))}
            </div>

            {/* sun */}
            <div
                className="synth-sun absolute bottom-[24%] left-[92%] -z-10 h-[200px] w-[200px] -translate-x-1/2 rounded-full opacity-70 sm:left-[80%] sm:h-[320px] sm:w-[320px] md:h-[520px] md:w-[520px] lg:left-[72%] lg:opacity-100"
                aria-hidden="true"
            />

            {/* grid floor */}
            <div className="synth-floor absolute inset-x-0 bottom-0 -z-10 h-[30%] bg-ink" aria-hidden="true">
                <div className="synth-grid" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
            </div>

            <div className="mx-auto grid min-h-[78vh] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-28 md:px-8 md:pb-40 lg:grid-cols-[1.15fr_1fr] lg:pb-48">
                <div>
                    <motion.p
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mb-6 inline-flex items-center gap-2 border-2 border-cream bg-ink/70 px-3 py-2 font-pixel text-[10px] uppercase text-gold backdrop-blur"
                    >
                        <span className="inline-block h-2 w-2 animate-blink bg-green" /> Now booting · Est. Africa
                    </motion.p>

                    <motion.h1
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl"
                    >
                        <span className="block">Building the future of</span>
                        <span className="block min-h-[0.9em]">
                            <Typewriter />
                        </span>
                        <span className="block">in Africa.</span>
                    </motion.h1>

                    <motion.p
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mt-6 max-w-xl text-lg text-cream/80"
                    >
                        Cognitix Development creates modern web, mobile, and AI-powered platforms for
                        governments, startups, and enterprises.
                    </motion.p>

                    <motion.div
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mt-9 flex flex-wrap gap-5"
                    >
                        <Link href="/#contact" className="btn-retro btn-primary">
                            ▶ Get Proposal
                        </Link>
                        <Link href="/#projects" className="btn-retro btn-ghost">
                            See Projects
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, type: 'spring', bounce: 0.35 }}
                    className="relative hidden lg:block"
                >
                    <div className="animate-float">
                        <RetroWindow title="C:\COGNITIX\WORKSPACE.PNG" bodyClassName="relative bg-ink-2 p-4">
                            <div className="relative aspect-square w-full">
                                <Image
                                    src="/images/worspace.png"
                                    alt="Cognitix software illustration"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 480px, 0px"
                                    className="object-contain"
                                />
                            </div>
                        </RetroWindow>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="absolute -bottom-14 -left-12 w-80"
                    >
                        <RetroWindow title="TERMINAL.EXE" className="!shadow-[6px_6px_0_0_var(--color-cyan)]" bodyClassName="bg-black p-4">
                            <div className="font-display text-lg leading-snug text-green">
                                {TERMINAL.map((line, i) => (
                                    <motion.p
                                        key={line}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 + i * 0.45 }}
                                    >
                                        {line}
                                    </motion.p>
                                ))}
                                <span className="animate-blink">█</span>
                            </div>
                        </RetroWindow>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
