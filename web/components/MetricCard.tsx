interface MetricProps {
  title: string;
  effect: number;
  ci: number[];
  prob: number;
}

export default function MetricCard({
  title,
  effect,
  ci,
  prob
}: MetricProps) {
  const positive = effect > 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      {/* Accent strip */}
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          positive ? "bg-emerald-500" : "bg-rose-500"
        }`}
      />

      <h3 className="text-sm font-medium text-slate-500">{title}</h3>

      <div className="mt-4 flex items-end gap-3">
        <div className="text-4xl font-semibold tracking-tight">
          +{effect.toFixed(3)}
        </div>
        <span className="mb-1 text-sm text-slate-500">
          lift
        </span>
      </div>

      <div className="mt-3 text-sm text-slate-600">
        95% CI: [{ci[0].toFixed(3)}, {ci[1].toFixed(3)}]
      </div>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm">
        <span className="text-slate-600">
          P(Treatment &gt; Control)
        </span>
        <span className="font-semibold text-slate-900">
          {(prob * 100).toFixed(1)}%
        </span>
      </div>
    </div>
  );
}