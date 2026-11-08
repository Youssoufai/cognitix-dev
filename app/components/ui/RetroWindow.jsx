export default function RetroWindow({
    title,
    children,
    className = '',
    bodyClassName = '',
    hoverable = false,
}) {
    return (
        <div className={`retro-window ${hoverable ? 'hoverable' : ''} ${className}`}>
            <div className="retro-titlebar">
                <span className="truncate font-pixel text-[9px] tracking-wide sm:text-[10px]">{title}</span>
                <span className="flex shrink-0 gap-1" aria-hidden="true">
                    <span className="retro-ctrl">_</span>
                    <span className="retro-ctrl">□</span>
                    <span className="retro-ctrl">×</span>
                </span>
            </div>
            <div className={bodyClassName}>{children}</div>
        </div>
    );
}
