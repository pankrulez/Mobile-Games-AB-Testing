export default function KpiCard({
  title,
  value,
  delta
}: {
  title: string;
  value: string;
  delta?: string;
}) {
  return (
    <div className="card p-6">
      <p className="text-xs text-[var(--text-secondary)] mb-1">
        {title}
      </p>
      <div className="text-3xl font-bold">{value}</div>
      {delta && (
        <span className="text-sm text-[var(--accent-green)]">
          {delta}
        </span>
      )}
    </div>
  );
}