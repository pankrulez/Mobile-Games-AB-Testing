import numpy as np

def bootstrap_mean_difference(control, treatment, n_bootstrap=10000, seed=42):
    """
    Computes bootstrap distribution of mean differences.
    Returns bootstrap samples and 95% confidence interval.
    """
    rng = np.random.default_rng(seed)
    diffs = []

    for _ in range(n_bootstrap):
        control_sample = rng.choice(control, size=len(control), replace=True)
        treatment_sample = rng.choice(treatment, size=len(treatment), replace=True)
        diffs.append(np.mean(treatment_sample) - np.mean(control_sample))

    diffs = np.array(diffs)
    ci_lower, ci_upper = np.percentile(diffs, [2.5, 97.5])

    return diffs, (ci_lower, ci_upper)