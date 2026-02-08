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
  return (
  <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium text-slate-500">{title}</h3>
      <span className="text-xs rounded-full bg-slate-100 px-2 py-1 text-slate-600">
        Retention
      </span>
    </div>

    <div className="mt-4 text-3xl font-semibold text-slate-900">
      +{effect.toFixed(3)}
    </div>

    <div className="mt-1 text-sm text-slate-500">
      Effect size (Treatment − Control)
    </div>

    <div className="mt-4 text-sm text-slate-700">
      <span className="font-medium">95% CI:</span>{" "}
      [{ci[0].toFixed(3)}, {ci[1].toFixed(3)}]
    </div>

    <div className="mt-3 flex items-center justify-between text-sm">
      <span className="text-slate-600">
        Bayesian P(Treatment &gt; Control)
      </span>
      <span className="font-semibold text-slate-900">
        {(prob * 100).toFixed(1)}%
      </span>
    </div>
  </div>
  );
}