import KpiCard from "@/components/KpiCard";

export default function OverviewPage() {
  return (
    <section>
      <h1 className="text-4xl font-extrabold mb-8">
        DASHBOARD_OVERVIEW
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard title="D1 RETENTION" value="45.2%" delta="+6.3%" />
        <KpiCard title="D7 RETENTION" value="27.8%" delta="+25.8%" />
        <KpiCard title="CONVERSION" value="2.8%" delta="+33.3%" />
        <KpiCard title="CONFIDENCE" value="98.2%" />
      </div>
    </section>
  );
}