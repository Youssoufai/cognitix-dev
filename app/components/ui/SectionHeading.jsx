import Reveal from './Reveal';

export default function SectionHeading({ index, label, title, subtitle, align = 'center' }) {
    const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
    return (
        <Reveal className={`mb-14 flex max-w-3xl flex-col ${alignCls}`}>
            <span className="mb-5 inline-flex items-center gap-2 border-2 border-cyan bg-ink-2 px-3 py-2 font-pixel text-[10px] uppercase tracking-wider text-cyan">
                <span className="text-pink">[{index}]</span> {label}
            </span>
            <h2 className="font-display text-5xl leading-[0.95] text-cream md:text-7xl">{title}</h2>
            {subtitle && <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">{subtitle}</p>}
        </Reveal>
    );
}
