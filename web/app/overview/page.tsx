import KpiCard from "@/components/KpiCard";

export default function OverviewPage() {
  return (
    <section>
      <h1 className="heading-xl mb-2">
        DASHBOARD_OVERVIEW
      </h1>

      <p className="body mb-10 max-w-3xl">
        This view provides a high-level snapshot of experiment performance
        across primary retention metrics. It is designed for fast,
        decision-oriented interpretation.
      </p>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="card card-equal p-6">
          <KpiCard title="D1 RETENTION" value="45.2%" delta="+6.3%" />
        </div>
        <div className="card card-equal p-6">
          <KpiCard title="D7 RETENTION" value="27.8%" delta="+25.8%" />
        </div>
        <div className="card card-equal p-6">
          <KpiCard title="ABSOLUTE LIFT" value="+1.8%" />
        </div>
        <div className="card card-equal p-6">
          <KpiCard title="CONFIDENCE" value="98.2%" />
        </div>
      </div>

      {/* Interpretation */}
      <div className="card p-6 max-w-3xl mb-6">
        <h2 className="heading-md mb-2">
          How to interpret this view
        </h2>
        <p className="body">
          Metrics shown here intentionally focus on primary KPIs only.
          Relative improvements are translated into absolute lift to
          emphasize practical impact rather than percentage optics.
        </p>
      </div>

      {/* Limitations */}
      <div className="card p-6 max-w-3xl">
        <h2 className="heading-md mb-2">
          What this view does not show
        </h2>
        <p className="body">
          This overview does not include distributional uncertainty or
          time-based dynamics. Those details are explored in the Retention tab
          to avoid cluttering executive decision-making.
        </p>
      </div>
    </section>
  );
}