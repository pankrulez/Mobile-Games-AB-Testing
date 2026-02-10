import BayesianValidationCard from "@/components/BayesianValidationCard";

export default function SummaryPage() {
  return (
    <section className="pb-12">
      <h1 className="heading-xl mb-2">
        STATISTICAL_JOURNEY
      </h1>
      <p className="body mb-10 max-w-3xl">
        End-to-end reasoning behind the experiment design,
        statistical validation, and final recommendation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-sm text-[var(--accent-blue)] mb-2">
            PHASE 01
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            THE HYPOTHESIS
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Moving the progression gate from level 30 to 40 would reduce early
            churn by allowing players to form a stronger engagement habit
            before encountering difficulty spikes.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-sm text-[var(--accent-pink)] mb-2">
            PHASE 02
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            EXPERIMENT DESIGN
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Randomized A/B test with ~25k users across two variants, evaluated
            over 14 days with Day-1 and Day-7 retention as primary metrics.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-sm text-[var(--accent-green)] mb-2">
            PHASE 03
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            STATISTICAL FINDINGS
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Bootstrap confidence intervals, permutation tests, and Bayesian
            inference consistently showed positive lift with high posterior
            confidence.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-sm text-yellow-400 mb-2">
            PHASE 04
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            FINAL RECOMMENDATION
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Ship the updated gate placement while monitoring long-term retention
            decay and monetization impact in follow-up experiments.
          </p>
        </div>

        <div className="mt-10 max-w-xl">
          <BayesianValidationCard />
        </div>
      </div>
    </section>
  );
}