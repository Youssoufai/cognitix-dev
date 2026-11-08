'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LINES = [
    'COGNITIX BIOS v2.0  (C) Cognitix Development',
    'Memory test ............ 640K OK',
    'Detecting platforms .... 7 found',
    'Mounting AFRICA.SYS .... OK',
    'Starting Cognitix OS ...',
];

export default function BootScreen() {
    const [visible, setVisible] = useState(true);
    const [shown, setShown] = useState(0);

    useEffect(() => {
        let seen = false;
        try {
            seen = sessionStorage.getItem('cognitix-booted') === '1';
            sessionStorage.setItem('cognitix-booted', '1');
        } catch {}
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (seen || reduce) {
            setVisible(false);
            return;
        }
        const timers = LINES.map((_, i) => setTimeout(() => setShown(i + 1), 220 * (i + 1)));
        timers.push(setTimeout(() => setVisible(false), 220 * LINES.length + 700));
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="boot"
                    className="boot-screen fixed inset-0 z-[200] flex cursor-pointer items-center justify-center bg-black p-6"
                    exit={{ opacity: 0, scaleY: 0.005, transition: { duration: 0.35, ease: 'easeIn' } }}
                    onClick={() => setVisible(false)}
                    role="presentation"
                >
                    <div className="w-full max-w-xl font-display text-xl text-gold sm:text-2xl">
                        {LINES.slice(0, shown).map((line) => (
                            <p key={line} className="text-glow">{line}</p>
                        ))}
                        <div className="mt-4 h-4 w-full border-2 border-gold p-0.5">
                            <motion.div
                                className="h-full bg-gold"
                                initial={{ width: '0%' }}
                                animate={{ width: `${(shown / LINES.length) * 100}%` }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        <p className="mt-6 text-base text-muted">
                            Click anywhere to skip<span className="animate-blink">_</span>
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
