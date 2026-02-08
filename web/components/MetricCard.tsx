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
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="text-sm font-medium text-slate-500">{title}</h3>

      <div className="mt-2 text-3xl font-semibold">
        +{effect.toFixed(3)}
      </div>

      <div className="mt-2 text-sm text-slate-600">
        95% CI: [{ci[0].toFixed(3)}, {ci[1].toFixed(3)}]
      </div>

      <div className="mt-4 text-sm">
        Bayesian P(Treatment &gt; Control):
        <span className="ml-1 font-semibold">
          {(prob * 100).toFixed(1)}%
        </span>
      </div>
    </div>
  );
}