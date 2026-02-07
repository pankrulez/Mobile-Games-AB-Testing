import numpy as np
from scipy.stats import norm

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

def permutation_test_mean_difference(
    control,
    treatment,
    n_permutations=10000,
    seed=42
):
    """
    Performs a permutation test on the difference in means.
    Returns observed statistic, null distribution, and p-value.
    """
    rng = np.random.default_rng(seed)

    control = np.array(control)
    treatment = np.array(treatment)

    observed_diff = np.mean(treatment) - np.mean(control)

    combined = np.concatenate([control, treatment])
    n_control = len(control)

    null_diffs = []

    for _ in range(n_permutations):
        rng.shuffle(combined)
        perm_control = combined[:n_control]
        perm_treatment = combined[n_control:]
        null_diffs.append(np.mean(perm_treatment) - np.mean(perm_control))

    null_diffs = np.array(null_diffs)

    p_value = np.mean(np.abs(null_diffs) >= np.abs(observed_diff))

    return observed_diff, null_diffs, p_value

def bootstrap_power_fast(
    mean_control,
    std_control,
    n,
    effect_size,
    n_sim=5000,
    alpha=0.05,
    seed=42
):
    """
    Fast power estimation using bootstrap on summary statistics.
    """
    rng = np.random.default_rng(seed)

    # Simulate sampling distribution of mean difference
    control_means = rng.normal(mean_control, std_control / np.sqrt(n), size=n_sim)
    treatment_means = rng.normal(
        mean_control + effect_size,
        std_control / np.sqrt(n),
        size=n_sim
    )

    diffs = treatment_means - control_means

    ci_low, ci_high = np.percentile(
        diffs, [100 * alpha / 2, 100 * (1 - alpha / 2)]
    )

    return ci_low > 0 or ci_high < 0

def peeking_false_positive_rate_fast(
    n_checks=10,
    n_simulations=100_000,
    alpha=0.05,
    seed=42
):
    """
    Estimates false positive rate under repeated peeking
    by simulating test statistics under H0.
    """
    rng = np.random.default_rng(seed)

    # Two-sided z-threshold
    z_alpha = norm.ppf(1 - alpha / 2)

    false_positives = 0

    for _ in range(n_simulations):
        for _ in range(n_checks):
            z = rng.normal(0, 1)  # null distribution
            if abs(z) > z_alpha:
                false_positives += 1
                break

    return false_positives / n_simulations

def bayesian_retention_analysis(
    control_success,
    control_total,
    treatment_success,
    treatment_total,
    n_samples=100_000,
    seed=42
):
    if control_success > control_total or treatment_success > treatment_total:
        raise ValueError("Success count cannot exceed total observations.")

    rng = np.random.default_rng(seed)

    control_posterior = rng.beta(
        1 + control_success,
        1 + control_total - control_success,
        size=n_samples
    )

    treatment_posterior = rng.beta(
        1 + treatment_success,
        1 + treatment_total - treatment_success,
        size=n_samples
    )

    prob_treatment_better = np.mean(treatment_posterior > control_posterior)

    return control_posterior, treatment_posterior, prob_treatment_better
