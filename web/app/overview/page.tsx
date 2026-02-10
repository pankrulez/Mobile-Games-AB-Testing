import KpiCard from "@/components/KpiCard";

export default function OverviewPage() {
  return (
    <section>
      <h1 className="heading-xl mb-2">
        DASHBOARD_OVERVIEW
      </h1>

      <p className="body mb-10 max-w-3xl">
        High-level comparison of control and treatment variants across
        primary retention metrics. This view is designed for fast,
        executive-level decision making.
      </p>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

      {/* Explanation */}
      <div className="card p-6 max-w-3xl">
        <h2 className="heading-md mb-2">
          How to interpret this view
        </h2>
        <p className="body">
          The treatment variant shows consistent improvement across both
          Day-1 and Day-7 retention. A Bayesian posterior probability above
          98% indicates that the observed lift is highly unlikely to be
          due to random chance. Distributional behavior and daily dynamics
          are explored in the Retention tab.
        </p>
      </div>
    </section>
  );
}