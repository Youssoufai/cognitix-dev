'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaSection() {
    return (
        <section id="contact" className="synth-sky relative isolate overflow-hidden px-4 py-32 text-cream md:px-8">
            <div className="synth-floor absolute inset-x-0 bottom-0 -z-10 h-[300px] bg-ink" aria-hidden="true">
                <div className="synth-grid" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-3xl border-4 border-cream bg-ink/85 p-8 text-center shadow-[12px_12px_0_0_var(--color-gold)] backdrop-blur md:p-14"
            >
                <p className="mb-6 font-pixel text-xs uppercase text-pink">
                    <span className="animate-blink">● Insert coin to continue ●</span>
                </p>
                <h2 className="text-chrome mb-6 font-display text-6xl leading-[0.9] md:text-8xl">
                    Let’s build something bold
                </h2>
                <p className="mx-auto mb-10 max-w-xl text-lg text-cream/80">
                    Whether you’re a government agency, a startup founder, or a visionary company — we’re ready to
                    turn bold ideas into real, working platforms across Africa.
                </p>
                <div className="flex flex-col justify-center gap-5 sm:flex-row">
                    <a href="mailto:getskulapp@gmail.com" className="btn-retro btn-primary">
                        ▶ Press Start
                    </a>
                    <Link href="/#services" className="btn-retro btn-ghost">
                        Explore Services
                    </Link>
                </div>
                <p className="mt-8 font-display text-xl text-muted">getskulapp@gmail.com</p>
            </motion.div>
        </section>
    );
}
