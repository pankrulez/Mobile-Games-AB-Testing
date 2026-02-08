export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Mobile Games A/B Testing
          </h1>
          <p className="text-xs text-slate-500">
            Experiment results & statistical analysis
          </p>
        </div>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
          Live Demo
        </span>
      </div>
    </header>
  );
}