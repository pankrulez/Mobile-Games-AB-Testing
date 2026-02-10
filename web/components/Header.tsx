export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-slate-900">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold tracking-wide">GAMEPULSE</h1>
          <p className="text-xs text-[var(--text-secondary)]">
            Mobile Games A/B Testing
          </p>
        </div>

        <a
          href="#"
          className="text-sm rounded-lg border border-white/10 px-3 py-1 hover:bg-white/5"
        >
          Live Demo
        </a>
      </div>
    </header>
  );
}