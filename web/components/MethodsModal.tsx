interface MethodsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MethodsModal({ isOpen, onClose }: MethodsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Statistical Methods
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-4 text-sm text-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <p>
            This experiment evaluates the causal impact of moving a progression
            gate from level 30 to level 40 using randomized A/B testing.
          </p>

          <div>
            <h3 className="font-medium text-slate-900 shadow-sm hover:shadow-md transition-shadow">
              Bootstrap Confidence Intervals
            </h3>
            <p>
              Effect sizes are estimated using bootstrap resampling to quantify
              uncertainty without relying on normality assumptions. This is
              well-suited for skewed behavioral data.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 shadow-sm hover:shadow-md transition-shadow">
              Permutation Testing
            </h3>
            <p>
              Statistical significance is assessed via permutation tests, which
              evaluate the null hypothesis by randomly reassigning group labels.
              This avoids parametric assumptions.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 shadow-sm hover:shadow-md transition-shadow">
              Bayesian A/B Testing
            </h3>
            <p>
              A Beta-Binomial model is used for retention outcomes to estimate the
              posterior probability that the treatment outperforms control. This
              allows results to be interpreted probabilistically.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 shadow-sm hover:shadow-md transition-shadow">
              Power Analysis & Peeking Bias
            </h3>
            <p>
              Power and minimum detectable effects are estimated offline using
              simulation. Peeking bias is analyzed separately to demonstrate how
              repeated interim testing inflates false positives.
            </p>
          </div>

          <p className="text-xs text-slate-500 shadow-sm hover:shadow-md transition-shadow">
            All computationally intensive analyses are executed offline and
            documented in the GitHub repository.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}