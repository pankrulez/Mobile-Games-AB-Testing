import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import results from "@/data/results.json";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-semibold">
            Experiment Summary
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            This dashboard presents precomputed results from a randomized
            A/B test evaluating the impact of moving a progression gate
            from level 30 to level 40.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.values(results).map((r: any) => (
            <MetricCard
              key={r.metric}
              title={r.metric}
              effect={r.effect_size}
              ci={r.ci}
              prob={r.bayesian_prob}
            />
          ))}
        </section>

        <section className="mt-10 text-sm text-slate-500">
          Statistical methods (bootstrap, permutation testing,
          Bayesian inference, power analysis) are documented
          in the GitHub repository.
        </section>
      </main>
    </>
  );
}