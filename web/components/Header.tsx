export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-white">
            Mobile Games A/B Testing
          </h1>
          <p className="text-xs text-slate-300">
            Experiment results & statistical analysis
          </p>
        </div>

        <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
          Live Demo
        </span>
      </div>
    </header>
  );
}