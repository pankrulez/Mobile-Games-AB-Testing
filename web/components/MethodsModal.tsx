"use client";

import { motion } from "framer-motion";

interface MethodsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MethodsModal({
  isOpen,
  onClose
}: MethodsModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="methods-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="w-full max-w-2xl rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-xl"
      >
        <div className="flex items-start justify-between">
          <h2
            id="methods-title"
            className="text-lg font-semibold tracking-tight"
          >
            Statistical Methods
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-4 text-sm text-slate-700">
          <p>
            This experiment evaluates the causal impact of moving a progression
            gate from level 30 to level 40 using randomized A/B testing.
          </p>

          <p>
            <strong>Bootstrap confidence intervals</strong> are used to quantify
            uncertainty without normality assumptions.
          </p>

          <p>
            <strong>Permutation tests</strong> assess statistical significance
            using label randomization.
          </p>

          <p>
            <strong>Bayesian A/B testing</strong> estimates the probability that
            the treatment outperforms control for retention outcomes.
          </p>

          <p>
            <strong>Power analysis and peeking bias</strong> are evaluated
            offline to understand sensitivity and Type-I error inflation.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}