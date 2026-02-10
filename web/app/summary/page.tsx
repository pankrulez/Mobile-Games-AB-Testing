import BayesianValidationCard from "@/components/BayesianValidationCard";

export default function SummaryPage() {
  return (
    <section className="pb-12">
      <h1 className="heading-xl mb-2">
        STATISTICAL_JOURNEY
      </h1>
      <p className="body mb-10 max-w-3xl">
        This project evaluates whether delaying a progression gate from
        level 30 to level 40 improves early player retention in a mobile game.
        The analysis focuses on decision reliability rather than isolated
        statistical significance.
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

          {/* How to read */}
        <div className="card p-6 mb-6">
          <h2 className="heading-md mb-2">
            How to read this experiment
          </h2>
          <p className="body">
            Instead of relying on a single hypothesis test, results are assessed
            using multiple complementary statistical approaches. This reduces
            false confidence and better reflects how real product decisions are
            made under uncertainty.
          </p>
        </div>

        {/* Methods overview */}
        <div className="card p-6 mb-6">
          <h2 className="heading-md mb-2">
            Methods used
          </h2>
          <p className="body">
            Bootstrap confidence intervals quantify uncertainty without
            distributional assumptions. Permutation testing validates statistical
            significance through label randomization. Bayesian inference provides
            a direct probability that the treatment outperforms control.
          </p>
        </div>

        {/* Decision framing */}
        <div className="card p-6">
          <h2 className="heading-md mb-2">
            Decision framing
          </h2>
          <p className="body">
            If run in production, these results would support rolling out the
            treatment to all users, with continued monitoring for longer-term
            retention effects. Remaining uncertainty lies primarily beyond the
            seven-day window.
          </p>
        </div>

        <div className="mt-10 max-w-xl">
          <BayesianValidationCard />
        </div>
      </div>
    </section>
  );
}